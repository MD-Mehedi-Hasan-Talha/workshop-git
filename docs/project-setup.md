# API Documentation

## Base URL
```
http://localhost:5000
```

## Endpoints

### 1. Get All Products
**Endpoint:**
```
GET /products
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 100
  }
]
```

### 2. Get Single Product
**Endpoint:**
```
GET /products/:id
```
**Response:**
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 100
}
```

### 3. Create a Product
**Endpoint:**
```
POST /products
```
**Request Body:**
```json
{
  "name": "New Product",
  "price": 150
}
```
**Response:**
```json
{
  "id": 1713705634781,
  "name": "New Product",
  "price": 150
}
```

### 4. Update a Product
**Endpoint:**
```
PUT /products/:id
```
**Request Body:**
```json
{
  "name": "Updated Product",
  "price": 200
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Updated Product",
  "price": 200
}
```

### 5. Delete a Product
**Endpoint:**
```
DELETE /products/:id
```
**Response:**
```json
{
  "id": 1,
  "name": "Deleted Product",
  "price": 100
}
```

## Error Responses
- **404 Not Found:** When the product does not exist.
- **400 Bad Request:** When the request body is invalid.
- **500 Internal Server Error:** Server-side issues.

## Notes
- Ensure that all requests include a valid JSON body where applicable.
- The server automatically updates product data when `products.json` changes.

