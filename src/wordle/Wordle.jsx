import React, { useEffect, useRef, useState } from "react";
import GamePlay from "./GamePlay";
//still in process
const Wordle = () => {
  const [word, setWord] = useState("");
  const [invalid, setInvalid] = useState(false);
  const hasFetchedData = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getWord() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://random-word-api.herokuapp.com/word?length=5"
        );
        if (!response.ok) {
          throw new Error("Cannot fetch word");
        }
        const [data] = await response.json();
        setWord(data);
        console.log(data);
        if (data.endsWith("ed") || data.endsWith("s")) {
          setInvalid(true);
          getWord();
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    if (hasFetchedData.current === false) {
      getWord();
      hasFetchedData.current = true;
    }
  }, [invalid]);

  if (loading) {
    return <div className="quote">Loading...</div>;
  }

  return <div>{word ? <GamePlay theWord={word} /> : null}</div>;
};

export default Wordle;
