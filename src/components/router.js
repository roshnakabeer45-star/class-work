

import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import BookCrud from "./BookCrud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookCrud />   // open BookCrud first
  },
  {
    path: "/student/:name",
    element: <Student />
  },
  {
    path: "/home",
    element: <Home />
  }
]);

export default router;