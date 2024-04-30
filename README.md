# Task Management System API

This RESTful API allows users to manage tasks including creating, retrieving, updating, and deleting tasks. Each task has a title, description, creation date, and status.

# Setup
Follow these steps to set up and run the Task Management System API:

1. Clone the Repository
##
git clone <repository-url>
##
cd task-management-system
##
2. Install Dependencies
##
npm install
##
3. Set up Environment Variables
Create a .env file in the root directory with the following content:

makefile
##
MONGO_URI=<your-mongodb-uri>
##
Replace <your-mongodb-uri> with the connection URI of your MongoDB database.

4. Start the Server
##
npm start
##
The server will start running at http://localhost:3000.

# API Endpoints
Create a New Task
##
POST /api/tasks
##
Create a new task by sending a POST request to /api/tasks with the following JSON payload:
##
{
  "title": "Task Title",
  "description": "Task Description"
}


# Retrieve All Tasks
##
GET /api/tasks
Retrieve all tasks by sending a GET request to /api/tasks.

# Retrieve a Single Task by ID
##
GET /api/tasks/:id
Retrieve a single task by its ID by sending a GET request to /api/tasks/:id.

# Update a Task by ID
##
PUT /api/tasks/:id
##
Update a task by its ID by sending a PUT request to /api/tasks/:id with the following JSON payload:
##
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed"
}
##
# Delete a Task by ID
##
DELETE /api/tasks/:id
##
Delete a task by its ID by sending a DELETE request to /api/tasks/:id.


# Testing
Unit Tests
Run unit tests with Jest:
##
npm test

# Integration Tests

Integration tests are located in the tests/integration directory. Run integration tests with Jest:
##
npm run test:integration
##
This README provides clear instructions on setting up the application, running the server, and interacting with the API endpoints. Additionally, it mentions how to run both unit and integration tests for the API.





