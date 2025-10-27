import React from "react";

function ApiCall(text) {
  return (
    <>
      <div className="content-container">
        <h1>ApiCall</h1>
        <div className="content-body">Api Call using axios</div>
      </div>

      <table border={1} align="center">
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ApiCall;
