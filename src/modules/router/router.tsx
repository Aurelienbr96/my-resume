import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../homepage/HomePage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
