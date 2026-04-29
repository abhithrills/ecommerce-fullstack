# Basic Ecommerce Web Application

This project gives you a simple ecommerce starter with:

- `frontend/`: React + Vite storefront
- `backend/`: Spring Boot REST API

## Features

- Product listing from the backend
- Cart management in React
- Checkout form that posts orders to Spring Boot
- Simple in-memory sample data
- CORS enabled for `http://localhost:5173`

## Prerequisites

- Java 17
- Maven 3.9+ for the backend
- Node.js 18+ for the frontend

## Run In VS Code

Open the project root in VS Code, then use two terminals.

### 1. Start the backend

If Maven is installed:

```powershell
cd backend
mvn spring-boot:run
```

If Maven is not installed yet, install it first or generate a Maven wrapper, then run the same command.

Backend URL:

```text
http://localhost:8080
```

### 2. Start the frontend

PowerShell blocks `npm.ps1` on some systems, so use `npm.cmd`:

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Frontend URL:

```text
http://localhost:5173
```

## API Endpoints

- `GET /api/products`
- `POST /api/orders/checkout`
- `GET /api/orders`

## Notes

- Orders and products are stored in memory for demo purposes.
- Shipping is free for orders above `$150`.
