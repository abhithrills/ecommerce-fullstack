package com.example.ecommerce.service;

import com.example.ecommerce.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final List<Product> products = List.of(
            new Product(1L, "Urban Runner Shoes", "Footwear", "Lightweight sneakers built for daily comfort and quick city walks.", 79.99, "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", 5, true),
            new Product(2L, "Minimal Leather Backpack", "Accessories", "A compact backpack with a padded laptop sleeve and clean silhouette.", 119.00, "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80", 4, true),
            new Product(3L, "Aurora Smart Watch", "Electronics", "Track workouts, notifications, and sleep with a bright AMOLED display.", 149.50, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80", 4, false),
            new Product(4L, "Organic Cotton Tee", "Apparel", "Soft relaxed-fit t-shirt made from breathable organic cotton.", 24.99, "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80", 4, false),
            new Product(5L, "Desk Lamp Pro", "Home", "Adjustable LED lamp with warm and cool light presets for your desk.", 59.99, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80", 5, true),
            new Product(6L, "Noise Canceling Headphones", "Electronics", "Immersive wireless headphones with all-day battery life.", 199.00, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", 5, true)
    );

    public List<Product> getProducts() {
        return products;
    }
}
