import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signUpNewUser(email, password); // Call context function

      if (result.success) {
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        setError(result.error.message); // Show error message on failure
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
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
            Create an Account
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Sign up to get started.
          </p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
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
              autoComplete="new-password"
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
              disabled={loading}
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-red-600 text-center text-xs pt-1">{error}</p>}
        </form>
        <p className="text-center text-xs text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;