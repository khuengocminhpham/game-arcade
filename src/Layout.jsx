import React from "react";
import { NavLink } from "react-router-dom";
import Quote from "./quotes/Quote";

const Layout = () => {
  return (
    <div className="navContainer">
      <div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="tictactoe"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "link"
          }
        >
          Tic Tac Toe
        </NavLink>
        <NavLink
          to="rockpaperscissor"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "link"
          }
        >
          Rock Paper Scissor
        </NavLink>
        {/* <NavLink
          to="wordle"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : "link"
          }
        >
          Wordle
        </NavLink> */}
      </div>
      <Quote />
    </div>
  );
};

export default Layout;
