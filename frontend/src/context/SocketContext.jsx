import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

// Create a context for the socket
export const SocketContext = createContext();

// A custom hook to access the socket context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

// Create a context provider for the socket
export const SocketContextProvider = ({ children }) => {
  // State for the socket instance
  const [socket, setSocket] = useState(null);
  // State for the online users
  const [onlineUsers, setOnlineUsers] = useState([]);
  // Get the authenticated user from the auth context
  const { authUser } = useAuthContext();

  // Effect to handle the socket connection
  useEffect(() => {
    // If there is an authenticated user
    if (authUser) {
      // Create a new socket instance
      const socket = io("https://chat-5nyc.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
      // Set the socket instance in the state
      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side.
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // Return a cleanup function to close the socket when the component unmounts
      return () => socket.close();
    } else {
      // If there is no authenticated user and there is a socket instance
      if (socket) {
        // Close the socket
        socket.close();
        // Set the socket instance in the state to null
        setSocket(null);
      }
    }
  }, [authUser]);

  // Return the provider with the socket and online users states
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
