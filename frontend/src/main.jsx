import React from "react";
import ReactDOM from "react-dom/client"; // Import the client-side version of ReactDOM
import App from "./App.jsx"; // Import the App component
import "./index.css"; // Import the global CSS file
import { BrowserRouter } from "react-router-dom"; // Import the BrowserRouter component from react-router-dom
import { AuthContextProvider } from "./context/AuthContext.jsx"; // Import the AuthContextProvider component from AuthContext.jsx
import { SocketContextProvider } from "./context/SocketContext.jsx"; // Import the SocketContextProvider component from SocketContext.jsx

// Render the App component inside the BrowserRouter component, which provides routing capabilities to the app
// The AuthContextProvider and SocketContextProvider components are used to provide context to the app
// The App component is the root component of the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
