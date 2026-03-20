# Simple Task Manager API

**Description:**

This project provides a simple RESTful API for managing tasks. It allows users to create, read, update, delete, and mark tasks as completed. The frontend provides a basic interface for interacting with the API.

**Why it's useful:**

A task manager is a fundamental tool for productivity. This API provides a foundation for building more complex task management applications or integrating task management functionality into existing systems.

**Installation:**

1.  **Clone the repository:**
    ```bash
    git clone https://github/your-username/simple-task-manager.git
    cd simple-task-manager
    ```

2.  **Set up the backend:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    # venv\Scripts\activate  # Windows
    pip install -r requirements.txt
    ```

3.  **Set up the frontend:**
    ```bash
    npm install
    npm start
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root directory and populate it with the following:
    ```
    DATABASE_URL=sqlite:///tasks.db
    ```

**API Endpoints:**

*   `GET /tasks`: Retrieves all tasks.
*   `POST /tasks`: Creates a new task.  Request body: `{ "title": "Task Title", "description": "Task Description", "completed": false }`
*   `GET /tasks/{id}`: Retrieves a specific task by ID.
*   `PUT /tasks/{id}`: Updates a specific task by ID. Request body: `{ "title": "New Task Title", "description": "New Task Description", "completed": true }`
*   `DELETE /tasks/{id}`: Deletes a specific task by ID.
*   `GET /tasks/completed`: Retrieves all completed tasks.

**Frontend:**

The frontend is a simple HTML page that uses JavaScript to interact with the API.  It displays a list of tasks and provides forms for creating and updating tasks.

**Examples:**

*   **Create a task:**
    `POST /tasks` with a JSON body like `{"title": "Grocery Shopping", "description": "Buy milk, eggs, and bread", "completed": false}`
*   **Get all tasks:**
    `GET /tasks`
*   **Get a specific task:**
    `GET /tasks/1`
*   **Update a task:**
    `PUT /tasks/1` with a JSON body like `{"title": "Grocery Shopping", "description": "Buy organic milk, free-range eggs, and sourdough bread", "completed": true}`
*   **Delete a task:**
    `DELETE /tasks/1`
*   **Get completed tasks:**
    `GET /tasks/completed`

**Testing:**

Unit tests are included to verify the functionality of the API endpoints.  Run the tests using `python -m unittest discover`.

**License:**

MIT License