import rock from ".././assets/hand-fist-solid.svg";
import paper from ".././assets/hand-solid.svg";
import scissor from ".././assets/hand-scissors-solid.svg";

const AfterGame = ({ onClick, user, opponent }) => {
  return (
    <>
      <div className="container">
        <p>Your choice:</p>
        <img
          className="choiceAfter userChoice"
          src={user == "rock" ? rock : user == "paper" ? paper : scissor}
          alt={user}
        />
      </div>
      <div className="container">
        <p>Opponent's choice:</p>
        <img
          className="choiceAfter"
          src={
            opponent == "rock" ? rock : opponent == "paper" ? paper : scissor
          }
          alt={opponent}
        />
      </div>
      <button onClick={onClick}>Play again?</button>
    </>
  );
};

export default AfterGame;
