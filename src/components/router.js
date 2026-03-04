import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/student/:name",   // Parameterised route
    element: <Student />
  }
]);

export default router;