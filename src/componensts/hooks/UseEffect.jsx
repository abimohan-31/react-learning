import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        <button onClick={increase}> + </button>
        <br />
        <button>{count}</button>
        <br />
        <button onClick={decrease}> - </button>
      </div>
    </div>
  );
}

export default UseEffect;
