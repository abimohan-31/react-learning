import React from "react";
import FetchData from "../componensts/axios/FetchData";
import PostData from "../componensts/axios/PostData";

function Axios() {
  return (
    <>
      <div>
        <div className="content-container">
          <h1>Axios</h1>
        </div>
        <PostData />
        <FetchData />
      </div>
    </>
  );
}

export default Axios;
