
# **TITAN Senior Full Stack Home Assignment**
This is a REST API . The project includes several endpoints that interact with the Pixabay API, store orders in a database, and retrieve them for specific users.

## **Technologies Used**

- **Backend**: Node.js with TypeScript
- **Database**: MongoDB (with Mongoose)
- **External API**: Pixabay API
- **HTTP Client**: Axios
- **Server Framework**: Express.js

  
  
## Installation

### **1. Clone the Repository**

```bash
git clone https://github.com/yourusername/titan-assignment.git
cd titan-assignment
```


### **2. Install Dependencies**

```bash
npm i
```

### **3 .Run the Project**

```bash
npm run start:dev
```

## Important information

User id for local environment

```bash
11111111, 22222222, 33333333
```
[postman collection](https://github.com/yakirifrah/titan-assignment/blob/main/titan-assignment.postman_collection.json)

## Project Structure

```bash
├── src
│   ├── controllers         # Business logic
│   ├── models              # Database models
│   ├── routes              # API routes
│   ├── utils               # Helper functions (Pixabay API integration)
│   └── server.ts            # Main entry point
├── package.json
└── tsconfig.json           # TypeScript configuration
```

## API Endpoints
### GET `/api/image-list/:{count}`

- **Description**: Endpoint that gets a number and returns a list of random photo URLs.
- **Request params**: count to determine the number of results per page Accepted values: 3 - 200.
- **Response**:
  - `200 OK`: Message successfully fetches the array of page urls.

### POST `/api/order`

- **Description**: endpoint that gets details of an order and store it in the database. 
- **Request Body**:
  - `body` . email, fullName, fullAddress, imageUrls, frameColor, user: userId
- **Response**:
  - `200 OK`: Return the created order JSON. The details are as follows: email, full name, full
address, image URLs, frame color, user.
  - `400 No Content`: Failed to create order.
 
  
### GET `/api/order`

- **Description**: Retrieve all orders.
- **Response**:
  - `200 OK`: Returns all orders from DB.
  - `400 No Content`: Failed to fetch orders.
 
  
### GET `/api/order/:{userId}`

- **Description**: Retrieve all orders by userId.
- **Request params**: userId
- **Response**:
  - `200 OK`: Returns all orders from DB.
  - `400 No Content`: Failed to fetch orders.****

 
  
