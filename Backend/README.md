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
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Request Parameters

| Field                | Type   | Required | Validation                         |
| -------------------- | ------ | -------- | ---------------------------------- |
| `fullName.firstName` | String | Yes      | Minimum 3 characters               |
| `fullName.lastName`  | String | No       | Minimum 3 characters (if provided) |
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
      "param": "fullName.firstName",
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
      "firstName": "John",
      "lastName": "Doe"
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
      firstName: "John",
      lastName: "Doe",
    },
    email: "john@example.com",
    password: "password123",
  }),
});

---

## User Login Endpointī

### Endpoint Details

**Route:** `POST /users/login`

**Description:** This endpoint allows existing users to authenticate and log into the Uber application. It validates the user's email and password, and returns an authentication token upon successful login.

---

## Request

### Method
```

POST

```

### URL
```

/users/login

```

### Content-Type
```

application/json

````

### Request Body

```json
{
  "email": "string",
  "password": "string"
}
````

### Request Parameters

| Field      | Type   | Required | Validation           |
| ---------- | ------ | -------- | -------------------- |
| `email`    | String | Yes      | Valid email format   |
| `password` | String | Yes      | Minimum 6 characters |

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
- Password less than 6 characters

#### 2. Authentication Error

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Invalid email or password"
}
```

**Possible Authentication Errors:**

- User with provided email does not exist
- Password does not match the stored hashed password

---

## Example Usage

### cURL

```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### JavaScript (Fetch API)

```javascript
const response = await fetch("http://localhost:4000/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
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

---

## User Profile Endpoint

### Endpoint Details

**Route:** `GET /users/profile`

**Description:** Returns the authenticated user's profile data. Requires a valid JWT token in `Authorization` header (`Bearer <token>`) or cookie `token`.

---

## Request

### Method

```
GET
```

### URL

```
/users/profile
```

### Headers

- `Authorization: Bearer <JWT_TOKEN>` (optional if cookie is used)
- `Cookie: token=<JWT_TOKEN>` (optional if Authorization header is used)

---

## Response

### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
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

### Error Response

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Access denied. No token provided."
}
```

or

```json
{
  "message": "Invalid token."
}
```

---

## User Logout Endpoint

### Endpoint Details

**Route:** `GET /users/logout`

**Description:** Logs out the authenticated user by clearing the `token` cookie and storing the token in a blacklist for 24 hours, then returns a success message.

---

## Request

### Method

```
GET
```

### URL

```
/users/logout
```

### Headers

- `Authorization: Bearer <JWT_TOKEN>` (or use cookie `token=<JWT_TOKEN>`)

---

## Response

### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "Logged out successfully"
}
```

### Error Response

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Access denied. No token provided."
}
```

---

## Captain Registration Endpoint

### Endpoint Details

**Route:** `POST /captains/register`

**Description:** Register a new captain. Validates input fields, hashes the password, and stores captain details including the nested `vehicle` object.

---

## Request

### Method

```
POST
```

### URL

```
/captains/register
```

### Content-Type

```
application/json
```

### Request Body

```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": number,
    "vehicleType": "car|motorcycle|auto rickshaw"
  }
}
```

### Request Parameters

| Field                 | Type   | Required | Validation                                  |
| --------------------- | ------ | -------- | ------------------------------------------- |
| `fullName.firstName`  | String | Yes      | Minimum 3 characters                        |
| `fullName.lastName`   | String | Yes      | Minimum 2 characters                        |
| `email`               | String | Yes      | Valid email format, unique                  |
| `password`            | String | Yes      | Minimum 6 characters                        |
| `vehicle.color`       | String | Yes      | Minimum 3 characters                        |
| `vehicle.plate`       | String | Yes      | Minimum 3 characters                        |
| `vehicle.capacity`    | Number | Yes      | Integer >= 1                                |
| `vehicle.vehicleType` | String | Yes      | One of `car`, `motorcycle`, `auto rickshaw` |

---

## Response

### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "JWT_TOKEN_HERE",
  "captain": {
    "_id": "captain_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
      "color": "Blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

### Error Responses

#### 1. Validation Error

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [ ... ]
}
```

#### 2. Duplicate Email Error

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "message": "Captain already exists"
}
```

---

## Captain Notes

- The captain password is hashed using bcrypt before saving.
- `email` is unique at database level.
- Tokens are JWTs signed with `process.env.JWT_SECRET` and valid for 24 hours.
- `status` defaults to `inactive` on registration.
