package com.example.ecommerce.model;

public record Product(
        Long id,
        String name,
        String category,
        String description,
        double price,
        String imageUrl,
        int rating,
        boolean featured
) {
}
