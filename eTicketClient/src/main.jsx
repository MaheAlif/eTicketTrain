import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "animate.css";
import Login from "./components/login.jsx";
import Register from "./components/Register.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import BuyTicket from "./components/BuyTicket.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/buyTicket",
        element: <BuyTicket></BuyTicket>
      }
    ],
  },
  {
    future: {
      v7_startTransition: true,
    },
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </StrictMode>
);
