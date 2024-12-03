# Basic Chat Application

This project is a basic real-time chat application built with React and Node.js. It allows users to join a chat room, send messages, and see who is currently online. The application uses Socket.IO for real-time communication between the client and server.

## Features

- Real-time messaging
- Display of active users
- Typing indicators
- Persistent message storage

## Technologies Used

- React
- Node.js
- Express
- Socket.IO
- JSON for message storage

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install dependencies for the server:

   ```sh
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```sh
   cd ../client
   npm install
   ```

### Running the Application

1. Start the server:

   ```sh
   cd server
   npm start
   ```

2. Start the client:

   ```sh
   cd ../client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the chat application.

### Folder Structure

```
chat-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── server/
│   ├── node_modules/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── README.md
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [GitHub Copilot](https://github.com/features/copilot)
