package com.example.ecommerce.service;

import com.example.ecommerce.dto.CheckoutRequest;
import com.example.ecommerce.model.Order;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class OrderService {

    private static final double SHIPPING_FEE = 12.00;

    private final AtomicLong orderCounter = new AtomicLong(1000);
    private final List<Order> orders = new ArrayList<>();

    public Order createOrder(CheckoutRequest request) {
        double subtotal = request.items().stream()
                .mapToDouble(item -> item.price() * item.quantity())
                .sum();

        double shipping = subtotal >= 150 ? 0 : SHIPPING_FEE;
        double total = subtotal + shipping;

        Order order = new Order(
                orderCounter.incrementAndGet(),
                request.customerName(),
                request.email(),
                request.address(),
                request.items(),
                subtotal,
                shipping,
                total,
                LocalDateTime.now()
        );

        orders.add(order);
        return order;
    }

    public List<Order> getOrders() {
        return orders;
    }
}