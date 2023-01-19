import {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  putBook
} from "./handlers.js";

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: () => getBook,
  },
  {
    method: "POST",
    path: "/books",
    handler: postBook,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: putBook,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBook,
  },
];

export default routes;
