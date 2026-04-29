package com.example.ecommerce.dto;

public record ApiResponse<T>(
        String message,
        T data
) {
}