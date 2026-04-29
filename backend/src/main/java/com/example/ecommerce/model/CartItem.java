package com.example.ecommerce.model;

public record CartItem(
        Long productId,
        String name,
        double price,
        int quantity,
        String imageUrl
) {
}
