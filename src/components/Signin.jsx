import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await signInUser(email, password); // Use your signIn function

    if (error) {
      setError(error); // Set the error message if sign-in fails

      // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // Redirect or perform any necessary actions after successful sign-in
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm p-6 space-y-4 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-15 h-10 rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Please enter your details to sign in.
          </p>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              className="peer w-full p-3 pt-5 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-blue-500"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className="absolute text-sm duration-150 transform -translate-y-3 top-4 z-10 origin-[0] left-4
                         peer-placeholder-shown:scale-100
                         peer-placeholder-shown:translate-y-0
                         peer-focus:scale-75
                         peer-focus:-translate-y-4
                         text-zinc-400"
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              className="peer w-full p-3 pt-5 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-neutral-300 focus:border-blue-500"
              placeholder=" "
              required
              autoComplete="current-password"
            />
            <label
              htmlFor="password"
              className="absolute text-sm duration-150 transform -translate-y-3 top-4 z-10 origin-[0] left-4
                         peer-placeholder-shown:scale-100
                         peer-placeholder-shown:translate-y-0
                         peer-focus:scale-75
                         peer-focus:-translate-y-4
                         text-zinc-400"
            >
              Password
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
          {error && <p className="text-red-600 text-center text-xs pt-1">{error}</p>}
        </form>
        <p className="text-center text-xs text-gray-600">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;