## BaseUrl : http://localhost:3000/api

## Get All Products

**Endpoint:** `/products`

**Method:** `GET`

**Response Format:**

```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 99.99,
    "description": "High-quality wireless headphones with noise cancellation.",
    "category": "Electronics",
    "image": "https://example.com/image1.jpg"
  }
]
```

## Get Product by ID

**Endpoint:** `/products/:id`

**Method:** `GET`

**Example Request:**

```
GET /api/products/1
```

**Example Response:**

```json
{
  "id": 1,
  "name": "Wireless Headphones",
  "price": 99.99,
  "description": "High-quality wireless headphones with noise cancellation.",
  "category": "Electronics",
  "image": "https://example.com/image1.jpg"
}
```

## Add a New Product

**Endpoint:** `/products`

**Method:** `POST`

**Request Body:**

```json
{
  "name": "Smart Watch",
  "price": 79.99,
  "description": "Feature-packed smartwatch with heart rate monitoring.",
  "category": "Electronics",
  "image": "https://example.com/image2.jpg"
}
```

**Response:**

```json
{
  "message": "Product added successfully",
  "product": {
    "id": 2,
    "name": "Smart Watch",
    "price": 79.99,
    "description": "Feature-packed smartwatch with heart rate monitoring.",
    "category": "Electronics",
    "image": "https://example.com/image2.jpg"
  }
}
```

## update Product

**Endpoint:** `/products/:id`

**Method:** `PUT`

**Request Body:**

```json
{
  "name": "Smart phone",
  "price": 200.99,
  "description": "Feature-packed smartwatch with heart rate monitoring.",
  "category": "Electronics",
  "image": "https://example.com/image2.jpg"
}
```

**Response:**

```json
{
  "message": "Product update successfully",
  "product": {
    "id": 2,
    "name": "Smart phone",
    "price": 200.99,
    "description": "Feature-packed smartwatch with heart rate monitoring.",
    "category": "Electronics",
    "image": "https://example.com/image2.jpg"
  }
}
```

## Delete a Product

**Endpoint:** `/products/:id`

**Method:** `DELETE`

**Example Request:**

```
DELETE /api/products/2
```

**Response:**

```json
{
  "message": "Product deleted successfully"
}
```
