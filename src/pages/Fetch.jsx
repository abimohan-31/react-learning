import React, { useEffect } from "react";

function Fetch() {
  const fetchUsers = () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));

  useEffect(fetchUsers);

  return <div>Fetch</div>;
}

export default Fetch;
