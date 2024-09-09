import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicTacToe from "./tictactoe/TicTacToe.jsx";
import Game from "./rockpaperscissor/Game.jsx";
import Home from "./home/Home.jsx";
import Wordle from "./wordle/Wordle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tictactoe",
        element: <TicTacToe />,
      },
      {
        path: "rockpaperscissor",
        element: <Game />,
      },
      {
        path: "wordle",
        element: <Wordle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
