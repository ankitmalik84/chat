import { createContext, useState, useContext } from "react";

// Create a context for authentication
export const AuthContext = createContext();

// A custom hook to access the authentication context
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// A context provider component to wrap around the app
export const AuthContextProvider = ({ children }) => {
  // State to store the authenticated user
  const [authUser, setAuthUser] = useState(
    // Retrieve the user from local storage if available, otherwise set to null
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  // Return the provider with the authUser and setAuthUser functions as its value
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
