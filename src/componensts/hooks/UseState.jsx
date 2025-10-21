import React, { useState } from "react";

function useStateFunction() {
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
      <h1>Use State</h1>
      <div>
        <button onClick={increase}> + </button>
        <br />
        <button>{count}</button>
        <br />
        <button onClick={decrease}> - </button>
      </div>
      <div style={style.container}>
        <h1>Age:{age}</h1>
        <button onClick={increaseAge}> + </button>
        <br />
        <input type="text" name="text" id="text" value={age} />
      </div>
    </div>
  );
}

const style = {
  container: {
    width: "400px",
    backgroundColor: "#574a4dff",
    borderRadius: "8px",
    textAlign: "center",
    color: "#0c232bff",
    padding: "5px",
  },
};
export default useStateFunction;
