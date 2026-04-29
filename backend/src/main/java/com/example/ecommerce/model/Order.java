package com.example.ecommerce.model;

import java.time.LocalDateTime;
import java.util.List;

public record Order(
        Long id,
        String customerName,
        String email,
        String address,
        List<CartItem> items,
        double subtotal,
        double shippingFee,
        double total,
        LocalDateTime orderedAt
) {
}
