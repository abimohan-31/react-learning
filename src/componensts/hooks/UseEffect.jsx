import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(27);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function increaseAge() {
    setAge(age + 1);
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
      <div>
        <h1>Age:{age}</h1>
        <button onClick={increaseAge}> + </button>
        <br />
        <input type="text" name="text" id="text" value={age} />
      </div>
    </div>
  );
}

export default UseEffect;
