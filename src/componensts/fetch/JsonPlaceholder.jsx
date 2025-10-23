import React, { useEffect, useState } from "react";

function JsonPlaceholder() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    console.log(userData);
    setUsers(userData);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <table border={1} cellPadding={2} cellSpacing={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JsonPlaceholder;
