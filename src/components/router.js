import { createBrowserRouter } from "react-router-dom";

import BookList from "./books/BookList";
import CreateBook from "./books/CreateBook";
import EditBook from "./books/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList/>
  },
  {
    path: "/books/create",
    element: <CreateBook/>
  },
  {
    path: "/books/edit/:id",
    element: <EditBook/>
  }
]);

export default router;
