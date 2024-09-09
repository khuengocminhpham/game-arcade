import React, { useRef, useState } from "react";

const GamePlay = ({ theWord }) => {
  const [lastKeyPressTime, setLastKeyPressTime] = useState(0);
  const inputFocus = useRef(null);
  const inputFocus2 = useRef(null);
  const inputFocus3 = useRef(null);
  const inputFocus4 = useRef(null);
  const inputFocus5 = useRef(null);
  function keyUpHandler(e) {
    const result = e.target.name;
    if (e.key == " ") {
      e.target.value = null;
    }
    if (e.key === "Backspace") {
      const currentTime = new Date().getTime();
      const timeSinceLastKeyPress = currentTime - lastKeyPressTime;
      if (timeSinceLastKeyPress < 800) {
        switch (result) {
          case "2":
            inputFocus.current.focus();
            break;
          case "3":
            inputFocus2.current.focus();
            break;
          case "4":
            inputFocus3.current.focus();
            break;
          case "5":
            inputFocus4.current.focus();
            break;
        }
        return;
      }

      setLastKeyPressTime(currentTime);
    } else if (e.target.value != "") {
      switch (result) {
        case "1":
          inputFocus2.current.focus();
          break;
        case "2":
          inputFocus3.current.focus();
          break;
        case "3":
          inputFocus4.current.focus();
          break;
        case "4":
          inputFocus5.current.focus();
          break;
      }
    }

    if (e.key == "Enter") {
      e.preventDefault();
      document.getElementById("myBtn").click();
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newWord =
      e.target[0].value +
      e.target[1].value +
      e.target[2].value +
      e.target[3].value +
      e.target[4].value;
    async function checkWord() {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`
        );
        const data = await response.json();
        console.log(data.title);
        if (data.title == "No Definitions Found") {
          window.alert("Word not valid!");
          return false;
        } else {
          return true;
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (checkWord()) {
      for (let i = 0; i < theWord.length; i++) {
        if (
          theWord.substring(i, i + 1).localeCompare(e.target[i].value) === 0
        ) {
          switch (e.target[i].name) {
            case "1":
              document.querySelector("[name='1']").style.color = "green";
              break;
            case "2":
              document.querySelector("[name='2']").style.color = "green";
              break;
            case "3":
              document.querySelector("[name='3']").style.color = "green";
              break;
            case "4":
              document.querySelector("[name='4']").style.color = "green";
              break;
            case "5":
              document.querySelector("[name='5']").style.color = "green";
              break;
          }
        } else if (theWord.includes(e.target[i].value)) {
          switch (e.target[i].name) {
            case "1":
              document.querySelector("[name='1']").style.color = "yellow";
              break;
            case "2":
              document.querySelector("[name='2']").style.color = "yellow";
              break;
            case "3":
              document.querySelector("[name='3']").style.color = "yellow";
              break;
            case "4":
              document.querySelector("[name='4']").style.color = "yellow";
              break;
            case "5":
              document.querySelector("[name='5']").style.color = "yellow";
              break;
          }
        }
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="1"
          ref={inputFocus}
          required
          maxLength="1"
          size="1"
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <input
          className="input"
          type="text"
          name="2"
          ref={inputFocus2}
          required
          maxLength="1"
          size="10"
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <input
          className="input"
          type="text"
          name="3"
          ref={inputFocus3}
          required
          maxLength="1"
          size="10"
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <input
          className="input"
          type="text"
          name="4"
          ref={inputFocus4}
          required
          maxLength="1"
          size="10"
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <input
          className="input"
          type="text"
          name="5"
          ref={inputFocus5}
          required
          maxLength="1"
          size="10"
          onKeyUp={(e) => keyUpHandler(e)}
        />
        <button id="myBtn" hidden></button>
      </form>
    </div>
  );
};

export default GamePlay;
