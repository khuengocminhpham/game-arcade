import React, { Suspense, useState } from "react";

const Quote = () => {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchQuote() {
    setLoading(true);
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Cannot fetch quote");
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return <div className="quote">Loading...</div>;
  }

  return (
    <>
      {advice ? (
        <div className="quote">{advice}</div>
      ) : (
        <button className="quote" onClick={fetchQuote}>
          Quote of the day
        </button>
      )}
    </>
  );
};

export default Quote;
