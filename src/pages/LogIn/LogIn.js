import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LogIn.css"; // Assuming you'll add your styles here

// LoginPage component for rendering the login page
export const LoginPage = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [error, setError] = useState(null);

  const handleSteamLogin = () => {
    // Redirect the user to the backend Steam authentication route
    window.location.href = "http://localhost:5000/auth/steam";
  };

//   useEffect(() => {
//     // Check if the user is already logged in
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/user", {
//           withCredentials: true, // Include cookies for session
//         });
//         setUser(response.data.user); // Set the user data
//       } catch (error) {
//         console.error("User not authenticated:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:5000/logout", {
//         withCredentials: true,
//       });
//       setUser(null); // Clear user data
//       window.location.href = "/"; // Redirect to the homepage
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   const handleLogin = () => {
//     // Redirect to Steam login
//     window.location.href = "http://localhost:5000/auth/steam";
//   };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Welcome to GameTracker</h1>
        <p>
          Log in to track your game progress and achievements across platforms.
        </p>
      </header>

      <div className="login-container">
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button google">Log in with Google</button>
        <button className="login-button steam" onClick={handleSteamLogin}>
          Log in with Steam
        </button>
        <button className="login-button xbox">Log in with Xbox</button>
      </div>
    </div>
  );
};