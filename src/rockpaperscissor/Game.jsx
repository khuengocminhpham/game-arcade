import React from "react";
import Button from "./Button";
import rock from ".././assets/hand-fist-solid.svg";
import paper from ".././assets/hand-solid.svg";
import scissor from ".././assets/hand-scissors-solid.svg";
import { useState } from "react";
import AfterGame from "./AfterGame";

function Game() {
  const [gameState, setGameState] = useState(true);
  const [choice, setChoice] = useState(0);
  const [theirChoice, setTheirChoice] = useState(0);
  const [result, setResult] = useState(null);

  const choices = {
    1: "scissor",
    2: "rock",
    3: "paper",
  };
  function game(myChoice) {
    let opponent = Math.floor(Math.random() * 3 + 1);
    setTheirChoice(opponent);
    if (myChoice < opponent) {
      setResult(Math.abs(myChoice - opponent) == 2 ? "You won!" : "You lost!");
    } else if (myChoice > opponent) {
      setResult(Math.abs(myChoice - opponent) == 2 ? "You lost!" : "You won!");
    } else {
      setResult("It's a tie!");
    }
    setGameState(false);
  }

  function clickHandler(value) {
    setChoice(value);
    game(value);
  }
  return (
    <div>
      {result ? <h1>{result}</h1> : <h1>Choose Rock, Paper, or Scissor!</h1>}
      {gameState ? (
        <>
          {" "}
          <Button
            onClick={() => clickHandler(1)}
            imgSrc={scissor}
            alt="scissor"
            value={1}
          />
          <Button
            onClick={() => clickHandler(2)}
            imgSrc={rock}
            alt="rock"
            value={2}
          />
          <Button
            onClick={() => clickHandler(3)}
            imgSrc={paper}
            alt="paper"
            value={3}
          />
        </>
      ) : (
        <AfterGame
          user={choices[choice]}
          opponent={choices[theirChoice]}
          onClick={() => {
            setGameState(true);
            setResult(null);
          }}
        />
      )}
    </div>
  );
}
export default Game;
