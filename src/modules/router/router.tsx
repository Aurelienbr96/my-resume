import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../homepage/HomePage";
import { Layout } from "./components/Layout";
import { ExperiencePage } from "../experiences/ExperiencePage";
import { ContactPage } from "../contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/experiences",
        element: <ExperiencePage />,
      },
      {
        path: "/contacts",
        element: <ContactPage />,
      },
    ],
  },
]);
