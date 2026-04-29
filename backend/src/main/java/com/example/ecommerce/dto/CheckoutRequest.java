package com.example.ecommerce.dto;

import com.example.ecommerce.model.CartItem;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record CheckoutRequest(
        @NotBlank(message = "Customer name is required")
        String customerName,
        @Email(message = "Email must be valid")
        @NotBlank(message = "Email is required")
        String email,
        @NotBlank(message = "Address is required")
        String address,
        @Valid
        @NotEmpty(message = "Cart items are required")
        List<CartItem> items
) {
}
