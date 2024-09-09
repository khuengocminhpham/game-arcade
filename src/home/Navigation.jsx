import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Let's play a game of your favorite!</h1>
      <div className="btns">
        <Link to="tictactoe" className="gameCard">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10199/10199746.png"
            alt=""
            className="cardImg"
          />
          <p>Tic Tac Toe</p>
        </Link>
        <Link to="rockpaperscissor" className="gameCard">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg"
            alt=""
            className="cardImg"
          />
          <p>Rock Paper Scissor</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
