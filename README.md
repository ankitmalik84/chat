# Chatting App 💬

This repository contains the progress of my Chat App project. Currently, the backend part is completed, and I'm utilizing this project to learn about Socket.IO and to practice both backend and frontend development.

## Project Overview 🌟

The Chatting App aims to provide a real-time messaging platform where users can communicate with each other instantly. The project is divided into two main components:

1. **Backend**: This part of the project deals with the server-side logic, including handling client connections, managing chat rooms, and facilitating message exchange between users. Technologies used in the backend include Node.js, MongoDB, and Express.js. One of the key technologies used in the backend is Socket.IO, which facilitates real-time bidirectional communication between clients and the server. With Socket.IO, the server can push updates to connected clients in real-time, allowing for seamless and interactive messaging experiences in the chat application.

2. **Frontend**: The frontend is responsible for providing a user interface where users can interact with the chat application. This involves displaying chat messages, allowing users to join/create chat rooms, and sending/receiving messages in real-time. Technologies utilized in the frontend include React, Vite, Tailwind CSS with DaisyUI, and Zustand for global state management. Additionally, Socket.IO is utilized for real-time communication with the backend server. This enables instant messaging and updates in the chat application without the need for manual refreshing.

## Progress 🚀

### Backend

- [x] Setup project structure
- [x] Implement user authentication
- [x] Develop RESTful API endpoints for user management
- [x] Implement message sending and receiving functionality
- [x] Integrate Socket.IO for real-time communication
- [x] Implement chat room functionality
- [x] Handle user disconnection and error cases
- [ ] Video Calling Functionality
- [ ] Voice Calling Functionality

### Frontend

- [x] Design user interface layout
- [x] Implement user authentication interface
- [x] Integrate with backend API for user management
- [x] Develop chat room UI components
- [x] Implement real-time message updates using Socket.IO
- [x] Handle user interactions and error cases
- [ ] Chat translation feature

## Environment Variables 🛠️

The project uses environment variables to manage configuration settings. You can set these variables in a `.env` file located in the root directory of the project. Here's the structure of the `.env` file:

- `PORT`: Specifies the port number on which the server will listen for incoming connections.
- `MONGO_DB_URI`: Specifies the connection URI for MongoDB, including the database server's address and authentication credentials.
- `JWT_SECRET`: Specifies the secret key used for signing JSON Web Tokens (JWTs), typically used for authentication and authorization.
- `NODE_ENV`: Specifies the environment in which the application is running (e.g., `development`, `production`, etc.).

## Real-Time Communication with Socket.IO 🚀

The Chatting App utilizes Socket.IO for real-time communication between clients and the server. Socket.IO enables bidirectional communication between web clients and servers, allowing for instant messaging and updates in the chat application.

## How to Run ▶️

1. **Clone Repository**:

   ```
   git clone <repository_url>
   ```

2. **Navigate to Project Directory**:

   ```
   cd chatting-app
   ```

3. **Install Dependencies**:

   ```
   npm install
   ```

4. **Run Backend**:

   ```
   npm start server
   ```

5. **Run Frontend**:

   ```
   cd client
   npm start
   ```

6. **Access Application**:
   Open your web browser and navigate to `http://localhost:5000`.

## Running with Docker 🐳

You can also run the Chatting App using Docker. Here's how:

1. **Clone Repository**:

   ```
   git clone <repository_url>
   ```

2. **Navigate to Project Directory**:

   ```
   cd chatting-app
   ```

3. **Build Docker Image**:

   ```
   docker build -t chatting-app .
   ```

4. **Run Docker Container**:

   ```
   docker run -it -p 5000:5000 chatting-app
   ```

5. **Access Application**:
   Open your web browser and navigate to `http://localhost:5000`.

## Contributing 🙌

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Additionally, feel free to open an issue for feature requests or bug reports.
