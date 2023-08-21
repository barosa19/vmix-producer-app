import React, { useState } from "react";

function AudioBtn({ input, bus, name }) {
  const [btnStatus, setBtnStatus] = useState("secondary");
//   const [btnName, setBtnName] = useState(name)
  const checkStatus = async () => {
    try {
      var x = new XMLHttpRequest();
      x.open("GET", "http://3.95.90.145:8088/api/", true);
      console.log(x);
      x.onreadystatechange = function () {
        if (x.readyState == 4 && x.status == 200) {
          var doc = x.responseXML;
          var audioBuses = doc
            .getElementsByTagName("input")[input-1]
            .getAttribute("audiobusses");
          console.log(audioBuses);
          if (audioBuses.includes(bus)) {
            setBtnStatus("danger");
            // setBtnName("Stop talking " + name)
            console.log(btnStatus)
          } else {
            setBtnStatus("success");
            // setBtnName("Talk to " + name)
            console.log(btnStatus)
          }
        }
      };
      x.send(null);
    } catch (err) {
      console.log(err);
      setBtnStatus("secondary");
    }
  };
  const talkTalent = (inputParam, busParam) => {
    console.log(inputParam, busParam);
    var x = new XMLHttpRequest();
    x.open(
      "GET",
      `http://3.95.90.145:8088/api/?Function=AudioBus&Input=${inputParam}&Value=${busParam}`,
      true
    );
    x.send();
    var y = new XMLHttpRequest();
    y.open(
      "GET",
      `http://3.95.90.145:8088/api/?Function=AudioOn&Input=${inputParam}`,
      true
    )
    y.send()
    x.onreadystatechange = function () {
      if (x.readyState === 4 && x.status === 200) {
        checkStatus();
      }
    };
  };

  return (
    <button
      onClick={() => talkTalent(input, bus)}
      type="button"
      className={"btn " + `btn-${btnStatus} ` + "m-2 btn-lg px-7"}
    >
      {name}
    </button>
  );
}

export default AudioBtn;
