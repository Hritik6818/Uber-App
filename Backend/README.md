# Uber App Backend API Documentation

## User Registration Endpoint

### Endpoint Details

**Route:** `POST /users/registration`

**Description:** This endpoint allows new users to register for the Uber application. It validates user input, hashes the password, creates a new user account, and returns an authentication token.

---

## Request

### Method

```
POST
```

### URL

```
/users/registration
```

### Content-Type

```
application/json
```

### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Request Parameters

| Field                | Type   | Required | Validation                         |
| -------------------- | ------ | -------- | ---------------------------------- |
| `fullname.firstname` | String | Yes      | Minimum 3 characters               |
| `fullname.lastname`  | String | No       | Minimum 3 characters (if provided) |
| `email`              | String | Yes      | Valid email format                 |
| `password`           | String | Yes      | Minimum 6 characters               |

---

## Response

### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com"
  }
}
```

### Error Responses

#### 1. Validation Error

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [
    {
      "value": "invalid-email",
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "value": "ab",
      "msg": "First Name Should be 3 character",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "value": "12345",
      "msg": "Password length should be 6 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Possible Validation Errors:**

- Invalid Email format
- First Name less than 3 characters
- Password less than 6 characters

---

## Example Usage

### cURL

```bash
curl -X POST http://localhost:4000/users/registration \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }'
```

### JavaScript (Fetch API)

```javascript
const response = await fetch("http://localhost:4000/users/registration", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fullname: {
      firstname: "John",
      lastname: "Doe",
    },
    email: "john@example.com",
    password: "password123",
  }),
});

const data = await response.json();
console.log(data);
```

---

## Notes

- The password is hashed using bcrypt before storage
- A JWT token is generated upon successful registration using the JWT_SECRET from environment variables
- The email field must be unique in the database
- Passwords are never returned in the response
