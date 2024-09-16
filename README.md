# titna task
A Rest API  


## API Endpoints


## Tech Stack
- **Backend:** Node.js, TypeScript, Express.
- **DB:** MongoDB, mongoose.
- 
## Installation

1. **Clone the Repository:**

      git clone [https://github.com/yakirifrah/titan-assignment](https://github.com/yakirifrah/titan-assignment.git)


2.  npm install && npm run dev:start

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
