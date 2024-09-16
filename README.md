# titna task
A Rest API application 





## API Endpoints


## Tech Stack
- **Backend:** Node.js, TypeScript, Express.
- **DB:** MongoDB, mongoose.
- 
## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yakirifrah/voyantis-home-assignment.git
```

2. npm install && npm run dev:start

### GET `/api/image-list/:{count}`

- **Description**: Endpoint that gets a number and returns a list of random photo URLs.
- **Request params**: count for determine the number of results per page Accepted values: 3 - 200.
- **Response**:
  - `200 OK`: Message successfully fetch the array of page urls.

### POST `/api/order`

- **Description**: endpoint that gets details of an order and store it in the database. 
- **Request Body**:
  - `body` . email, fullName, fullAddress, imageUrls, frameColor, user: userId
- **Response**:
  - `200 OK`: Return the created order JSON. The details: email, full name, full
address, images URLs, frame color, user.
  - `400 No Content`: Failed to create order.
 
  
### GET `/api/order`

- **Description**: Retrieve all orders.
- **Response**:
  - `200 OK`: Returns all order from DB.
  - `400 No Content`: Failed to fetch orders.
 
  
### GET `/api/order/:{userId}`

- **Description**: Retrieve all orders by userId.
- **Request params**: userId
- **Response**:
  - `200 OK`: Returns all order from DB.
  - `400 No Content`: Failed to fetch orders.****
