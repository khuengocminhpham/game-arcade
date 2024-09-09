import React from "react";
import Navigation from "./Navigation";
import Quote from "../quotes/Quote";

const Home = () => {
  const theWord = "assgb";
  const guess = "sishs";

  function getFrequency(string, n) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
      var character = string.charAt(i);
      if (freq[character]) {
        freq[character].times++;
        freq[character].index.push(i);
      } else {
        freq[character] = { name: character, times: 1, index: [i] };
      }
    }
    let repeatedLetters = [];
    for (const property in freq) {
      if (freq[property].times >= n) {
        repeatedLetters.push(freq[property]);
      }
    }
    return repeatedLetters;
  }
  let appearCount = 0;
  function matchRepeatedLetters(guess, key) {
    const guessObj = getFrequency(guess, 3);
    if (guessObj.length != 0) {
      if (key.includes(guessObj[0].name)) {
        const keyObj = getFrequency(key, 1).find(
          (element) => element.name == guessObj[0].name
        );
        console.log(guessObj[0].times);
        console.log(keyObj.times);
        if (guessObj[0].times > keyObj.times) {
          appearCount = keyObj.times;
          console.log(keyObj.times);

          for (let i = 0; i < guess.length; i++) {
            if (keyObj.index.find((e) => (e = guessObj[0].index[i]))) {
              appearCount--;
              return appearCount;
            }
          }
          return guessObj[0].name;
        }
      }
    } else {
      return -1;
    }
  }

  // function wordle() {
  //   let copyWord = theWord;
  //   for (let i = 0; i < guess.length; i++) {
  //     if (guess.substring(i, i + 1) == copyWord.substring(i, i + 1)) {
  //       console.log(guess.substring(i, i + 1), "the right order");
  //       let removedWord = copyWord.substring(i, i + 1);
  //       copyWord = copyWord.replace(removedWord, ".");
  //       console.log(copyWord);
  //     } else if (!copyWord.includes(guess.substring(i, i + 1))) {
  //       console.log(guess.substring(i, i + 1), "the wrong word");
  //       console.log(copyWord);
  //     } else if (copyWord.includes(guess.substring(i, i + 1))) {
  //       if (guess.substring(i, i + 1) == matchRepeatedLetters(guess, theWord)) {
  //         if (appearCount != 0) {
  //           appearCount--;
  //           console.log("wrong order");
  //         } else {
  //           console.log("the wrong word");
  //         }
  //       } else {
  //         console.log("wrong order");
  //       }
  //     }
  //   }
  // }
  matchRepeatedLetters(guess, theWord);
  // wordle();
  return (
    <>
      <Navigation />
      {/* <Quote /> */}
    </>
  );
};

export default Home;
