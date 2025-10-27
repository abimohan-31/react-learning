import React from "react";
import JsonPlaceholder from "../componensts/fetch/JsonPlaceholder";
import LocalAPI from "../componensts/fetch/LocalAPI";
import ApiCall from "../componensts/fetch/ApiCall";

function Fetch() {
  return (
    <>
      <div >
        {/* <JsonPlaceholder /> */}
        {/* <LocalAPI /> */}
        <ApiCall />
      </div>
    </>
  );
}

export default Fetch;
