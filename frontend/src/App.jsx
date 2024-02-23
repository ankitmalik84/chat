import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // Use the useAuthContext hook to get the authUser from the context
  const { authUser } = useAuthContext();

  // Render the App component
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* Use the Routes component to define the routes for the application */}
      <Routes>
        {/* If the user is authenticated, render the Home component. Otherwise, navigate to the login page */}
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        {/* If the user is not authenticated, render the Login component. Otherwise, navigate to the home*/}
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
