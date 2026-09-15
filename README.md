# 🛍️ E-Commerce Platform — Backend

A production-oriented REST API for a full-stack e-commerce platform built with **Node.js, Express, TypeScript, Prisma, and PostgreSQL**.

The backend provides authentication, role-based authorization, product and category management, cart operations, addresses, checkout, orders, payments, stock management, and admin order management.

## ✨ Features

### 🔐 Authentication & Authorization

* User registration
* User login
* JWT authentication
* HTTP-only access token cookie
* HTTP-only refresh token cookie
* Access token refresh
* Logout
* Current user endpoint
* Role-based authorization
* USER and ADMIN roles

### 📂 Categories

* Create category
* Get all categories
* Get category by ID
* Update category
* Delete category
* Unique category names

### 🛍️ Products

* Create product
* Get products
* Get product by ID
* Update product
* Delete product
* Product categories
* Product images
* Product variants
* Variant stock
* Unique product slugs
* Active/inactive products

### 🛒 Cart

* One cart per user
* Add item to cart
* Update quantity
* Remove item
* Clear cart
* Product and variant relationships

### 📍 Addresses

* Create address
* Get user addresses
* Get address by ID
* Update address
* Delete address
* Default address support

### 📦 Orders

* Create order from cart
* Validate delivery address
* Validate product availability
* Validate variant stock
* Calculate order total on the server
* Create order items with price snapshots
* Clear cart after successful order
* Cancel eligible orders
* Restore variant stock after cancellation

### 💳 Payments

Current payment structure supports:

* Cash on Delivery
* Stripe-ready payment architecture
* Payment status tracking
* Transaction ID
* Stripe session ID

### 👑 Admin Orders

* View all orders
* View order details
* View customer information
* View order items
* View payment information
* Update order status
* Protected admin routes

### 📊 Order Status Flow

```text
PENDING
   ↓
PROCESSING
   ↓
SHIPPED
   ↓
DELIVERED
```

Cancellation is allowed from eligible states:

```text
PENDING ─────→ CANCELLED
PROCESSING ──→ CANCELLED
```

Delivered and cancelled orders cannot be changed.

## 🛠️ Tech Stack

* **Node.js**
* **Express 5**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL**
* **Zod**
* **JWT**
* **Cookie-based authentication**
* **Helmet**
* **CORS**
* **Compression**
* **Pino**
* **Pino HTTP**

## 📁 Project Structure

```text
src/
├── config/
│
├── middleware/
│   ├── auth.middleware.ts
│   └── role.middleware.ts
│
├── modules/
│   ├── auth/
│   ├── user/
│   ├── category/
│   ├── product/
│   ├── cart/
│   ├── address/
│   ├── order/
│   └── admin-order/
│
├── app.ts
└── server.ts

prisma/
└── schema.prisma

generated/
└── prisma/
```

## 🗄️ Database

The application uses **PostgreSQL** with **Prisma ORM**.

Main entities include:

```text
User
Category
Product
ProductImage
ProductVariant
Cart
CartItem
Address
Order
OrderItem
Payment
```

### Database Relationship Overview

```text
User
 ├── Cart
 │    └── CartItem
 │         ├── Product
 │         └── ProductVariant
 │
 ├── Address
 │
 └── Order
      ├── OrderItem
      │    ├── Product
      │    └── ProductVariant
      │
      └── Payment

Category
   └── Product
        ├── ProductImage
        └── ProductVariant
```

## ⚙️ Environment Variables

Create a `.env` file:

```env
NODE_ENV=development

PORT=5000

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_access_token_secret

JWT_REFRESH_SECRET=your_refresh_token_secret

FRONTEND_URL=http://localhost:3000
```

Do not commit `.env` files to GitHub.

## 🚀 Getting Started



### . Install dependencies

```bash
npm install
```

### . Configure environment variables

Create:

```text
.env
```

and add the required environment variables.

### . Generate Prisma Client

```bash
npx prisma generate
```

### 5. Apply database migrations

```bash
npx prisma migrate deploy
```

For local development, migrations can be created with:

```bash
npx prisma migrate dev
```

### 6. Start development server

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

## 🏗️ Build

Build the TypeScript project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## ❤️ Health Check

The API provides a health endpoint:

```text
GET /api/v1/health
```

Example response:

```json
{
  "success": true,
  "message": "API is healthy",
  "environment": "development"
}
```

## 🔗 API Endpoints

### Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/logout
GET    /api/auth/me
```

### Categories

```text
POST   /api/categories
GET    /api/categories
GET    /api/categories/:id
PATCH  /api/categories/:id
DELETE /api/categories/:id
```

### Products

```text
POST   /api/products
GET    /api/products
GET    /api/products/:id
PATCH  /api/products/:id
DELETE /api/products/:id
```

### Cart

```text
POST   /api/cart/items
GET    /api/cart
PATCH  /api/cart/items/:id
DELETE /api/cart/items/:id
DELETE /api/cart
```

### Addresses

```text
POST   /api/addresses
GET    /api/addresses
GET    /api/addresses/:id
PATCH  /api/addresses/:id
DELETE /api/addresses/:id
```

### Orders

```text
POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
PATCH  /api/orders/:id/cancel
```

### Admin Orders

```text
GET    /api/admin/orders
GET    /api/admin/orders/:id
PATCH  /api/admin/orders/:id/status
```

Admin endpoints require authentication and the `ADMIN` role.

## 🔒 Security

The API uses:

* HTTP-only cookies for JWT tokens
* Role-based access control
* Helmet security headers
* CORS configuration
* Zod request validation
* Server-side stock validation
* Server-side order total calculation
* Protected admin routes
* Prisma relational constraints

## 🧠 Architecture

The backend follows a modular architecture:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
Prisma
  ↓
PostgreSQL
```

Each major feature is separated into its own module.

Example:

```text
modules/product/
├── product.route.ts
├── product.controller.ts
├── product.service.ts
├── product.repository.ts
├── product.validation.ts
├── product.types.ts
└── index.ts
```

## 🔄 Order Processing

When a user creates an order:

```text
Cart
 ↓
Validate User
 ↓
Validate Address
 ↓
Validate Product
 ↓
Validate Variant Stock
 ↓
Calculate Total
 ↓
Decrease Stock
 ↓
Create Order
 ↓
Create Order Items
 ↓
Create Payment
 ↓
Clear Cart
```

All critical order operations are handled server-side and use database transactions where required.

## 🚀 Deployment

The backend can be deployed on a Node.js-compatible hosting platform such as **Render**.

Production environment variables should include:

```env
NODE_ENV=production
PORT=<platform-provided-port>
DATABASE_URL=<production-postgresql-url>
JWT_SECRET=<strong-production-secret>
JWT_REFRESH_SECRET=<strong-production-refresh-secret>
FRONTEND_URL=<deployed-frontend-url>
```

The production frontend origin must be configured correctly in CORS.

## 👨‍💻 Author

**Nehal Tariq**

Full Stack Web Developer

Built with **Node.js, Express, TypeScript, Prisma, PostgreSQL, JWT, and REST APIs**.
