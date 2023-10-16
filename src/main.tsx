import "@/index.css";
import Game from "@/routes/Game";
import Index from "@/routes/Index";
import Root from "@/routes/Root";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Index /> },
        { path: "/game", element: <Game /> },
      ],
    },
  ],
  {
    basename: "/plant-cell-organelles",
  },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
