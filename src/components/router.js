

import { createBrowserRouter } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome Page</h1>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

export default router;