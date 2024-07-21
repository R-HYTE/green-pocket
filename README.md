# Green Pocket

Green Pocket is an e-commerce application built with MongoDB, ExpressJS, NodeJS, and React. This project showcases a full-stack JavaScript application with CRUD operations and feedback management.

## Description

Green Pocket leverages the following technologies:

- **MongoDB Atlas**: A scalable and flexible cloud database service. Local MongoDB installation can also be used by providing the connection URI in the `MONGO_URI` variable in the `.env` file.
- **ExpressJS and NodeJS**: For handling the server-side logic and providing RESTful API endpoints.
- **React**: A powerful JavaScript library for building dynamic and responsive user interfaces.
- **dotenv**: For managing environment variables securely.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing schema definitions and data validation.

### Why This Stack?

- **MongoDB**: Chosen for its flexibility and scalability as a NoSQL database.
- **ExpressJS and NodeJS**: Provide a robust backend framework for handling server-side logic and API endpoints.
- **React**: Enables the creation of a dynamic and responsive frontend.
- **Mongoose**: Adds structure and validation to the MongoDB data.

## Project Architecture

- **Backend**: 
  - **Server**: Node.js and Express.js handle server-side operations and provide RESTful API endpoints.
  - **Database**: MongoDB stores application data, with Mongoose managing data models and schemas.

- **Frontend**:
  - **Client**: React manages the user interface, providing a dynamic and responsive user experience.

## Installation

### Prerequisites

Ensure Node.js and npm are installed on your machine. If not, install them using:

```bash
sudo apt install node npm
```

## Setup Instructions
**1. Clone the Repository**

```bash
git clone https://github.com/r-hyte/green-pocket.git
cd green-pocket

```

**2. Backend Setup**

Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file for environment variables:

```bash
touch .env
```

Add the following to your `.env` file:
``` env
PORT=your_port_number
MONGO_URI=your_mongo_uri
```

**3. Frontend Setup**

Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

## Running the Application
**1. Start the Backend Server**

In the backend folder, start the server:
```bash
npm run dev
```

**2. Start the Frontend Development Server**

In the frontend folder, start the React development server:
```bash
npm start
```

The application will run with the backend accessible at `http://localhost:4000` and the frontend at `http://localhost:3000`.


# Usage
### API Endpoints
- **Products**

    - `GET /api/products` - Retrieve all products or search for products.
    - `GET /api/products/:id` - Retrieve a specific product by ID.
    - `POST /api/products` - Add a new product.
    - `PATCH /api/products/:id` - Update a specific product by ID.
    - `DELETE /api/products/:id` - Delete a specific product by ID.

- **Feedbacks**

    - `GET /api/feedbacks` - Retrieve all feedbacks.
    - `GET /api/feedbacks/:id` - Retrieve a specific feedback by ID.
    - `POST /api/feedbacks` - Add a new feedback.
    - `PATCH /api/feedbacks/:id` - Update a specific feedback by ID.
    - `DELETE /api/feedbacks/:id` - Delete a specific feedback by ID.

### Frontend
The frontend interface allows users to:

- View products.
- Add products to the cart.
- Manage the cart's contents.
- Leave feedback on products.

### Environment Variables
Ensure the .env file in the backend folder contains the necessary environment variables:

``` env
PORT={insert a port number here}
MONGO_URI={insert the connection uri to your database}
```

# Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.