import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Default credentials
const defaultEmail = "admin@example.com";
  const defaultPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === defaultEmail && password === defaultPassword) {
      navigate("/home"); // Redirect to Home Page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline hover:text-blue-700"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
