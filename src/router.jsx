import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);