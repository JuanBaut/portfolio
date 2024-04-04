import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./features/Errors/ErrorPage.tsx";
import Projects from "./features/Projects/Projects.tsx";
import Photos from "./features/Photos/Photos.tsx";
import About from "./features/About/About.tsx";
import App from "./App.tsx";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/photos",
          element: <Photos />,
        },
      ],
    },
  ]);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
