import React, { useState } from "react";

function ReturnBtn({ input, output, name }) {
  const talkTalent = (inputParam, outputParam) => {
    var x = new XMLHttpRequest();
    x.open(
      "GET",
      `http://3.95.90.145:8088/api/?Function=VideoCallVideoSource&Input=${inputParam}&Value=${outputParam}`,
      true
    );
    x.send();

    x.onreadystatechange = function () {
      if (x.readyState === 4 && x.status === 200) {
        console.log("Success")
      }
    };
  };

  return (
    <button
      onClick={() => talkTalent(input, output)}
      type="button"
      className={"btn " + `text-bg-dark ` + "m-2"}
    >
      {name}
    </button>
  );
}

export default ReturnBtn;
