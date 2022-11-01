import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
          <p>very nice</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
