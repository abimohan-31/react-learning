import React from "react";

function ConditionalRendering({ isActive = true, status }) {
  return (
    <div className="content-container">
      <h1>ConditionalRendering</h1>
      {isActive && <p>Active</p>}
      {status == "paid" && <p>Paid</p>}
    </div>
  );
}

export default ConditionalRendering;
