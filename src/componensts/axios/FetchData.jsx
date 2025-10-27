import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://express-mongo-connection-sigma.vercel.app/api/users"
      );
      const userData = response.data.users;
      console.log(userData);
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="content-container">
        <h1>FetchData</h1>
        <div className="content-body">Api call using axios</div>
      </div>

      <table border={1} cellPadding={5} cellSpacing={0} align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>isActive</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
           
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isActive}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
              </tr>
          
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FetchData;
