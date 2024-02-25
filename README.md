# Chatting App

This repository contains the progress of my Chat App project. Currently, the backend part is completed, and I'm utilizing this project to learn about Socket.IO and to practice both backend and frontend development.

## Project Overview

The Chatting App is aimed at providing a real-time messaging platform where users can communicate with each other instantly. The project is divided into two main components:

1. **Backend**: This part of the project deals with the server-side logic, including handling client connections, managing chat rooms, and facilitating message exchange between users. Technologies used in the backend include [nodejs , mongoDB, expressjs].

2. **Frontend**: The frontend is responsible for providing a user interface where users can interact with the chat application. This involves displaying chat messages, allowing users to join/create chat rooms, and sending/receiving messages in real-time. Technologies utilized in the frontend include [ react , vite, tailwind+daisyUI , Zustand(for global state)].

## Progress

### Backend

- [x] Setup project structure
- [x] Implement user authentication
- [x] Develop RESTful API endpoints for user management
- [x] Implement message sending and receiving functionality
- [x] Integrate Socket.IO for real-time communication
- [x] Implement chat room functionality
- [ ] Handle user disconnection and error cases

### Frontend

- [x] Design user interface layout
- [x] Implement user authentication interface
- [x] Integrate with backend API for user management
- [x] Develop chat room UI components
- [x] Implement real-time message updates using Socket.IO
- [ ] Handle user interactions and error cases

## How to Run

1. **Clone Repository**:

   ```
   git clone <repository_url>
   ```

2. **Install Dependencies**:

   ```
   cd chatting-app
   npm install
   ```

3. **Run Backend**:

   ```
   npm start server
   ```

4. **Run Frontend**:

   ```
   cd client
   npm start
   ```

5. **Access Application**:
   Open your web browser and navigate to `http://localhost:5000`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
