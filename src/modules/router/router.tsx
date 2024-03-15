import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../homepage/HomePage";
import { Layout } from "./components/Layout";
import { LoginPage } from "../login/LoginPage";
import { RecommendationAdmin } from "../admin/recommendations/RecommendationAdmin";
import { LayoutAdmin } from "./components/LayoutAdmin";
import { RecommendationPage } from "../recommendations/RecommendationPage";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
        path: "/recommendations",
        element: <RecommendationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [{ element: <RecommendationAdmin />, path: "recommendations" }],
  },
]);
