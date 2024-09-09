import React, { useState } from "react";
import Frame from "./Frame";
import styles from "./Frame.module.css";

const TicTacToe = () => {
  let initialTable = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const [user, setUser] = useState(1);
  const [table, setTable] = useState(initialTable);
  const [gameOver, setGameOver] = useState({
    win: false,
    tie: false,
    winner: "",
  });
  function checkwon(a, b, c) {
    if (table[a] == table[b] && table[a] == table[c] && table[a] !== " ") {
      setGameOver((g) => ({ ...g, win: true, winner: table[a] }));
      return true;
    } else {
      return false;
    }
  }
  function checkWinner() {
    return checkwon(0, 1, 2) ||
      checkwon(3, 4, 5) ||
      checkwon(6, 7, 8) ||
      checkwon(0, 3, 6) ||
      checkwon(1, 4, 7) ||
      checkwon(2, 5, 8) ||
      checkwon(0, 4, 8) ||
      checkwon(2, 4, 6)
      ? true
      : false;
  }
  function tictactoe(choice) {
    if (table[choice - 1] === " ") {
      if (user == 1) {
        setTable(table.fill("X", choice - 1, choice));
        setUser(2);
        checkWinner();
      } else if (user == 2) {
        setTable(table.fill("O", choice - 1, choice));
        setUser(1);
        checkWinner();
      }

      if (!checkWinner() && table.every((item) => item !== " ")) {
        setGameOver((g) => ({ ...g, tie: true }));
      }
    } else {
      return;
    }
  }
  function reset() {
    setUser(1);
    setTable(initialTable);
    setGameOver({
      win: false,
      tie: false,
      winner: "",
    });
  }
  return (
    <>
      <h1>Let's play TicTacToe! You are the X.</h1>

      <div
        className={
          gameOver.win || gameOver.tie ? styles.disabled : styles.notdisabled
        }
      >
        <div className={styles.grid}>
          {table.map((c, i) => (
            <Frame
              key={i}
              value={c}
              onClick={() => {
                tictactoe(i + 1);
              }}
            />
          ))}
        </div>
      </div>

      {gameOver.win && (
        <p className={styles.gameover}>{gameOver.winner} won!</p>
      )}
      {gameOver.tie && (
        <p className={styles.gameover}>Game over, it's a tie.</p>
      )}
      {(gameOver.win || gameOver.tie) && (
        <button onClick={reset}>Play again?</button>
      )}
    </>
  );
};

export default TicTacToe;
