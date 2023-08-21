import React, { useState } from "react";

function AudioBtn({ input, bus, name }) {
    const [busStatus, setBusStatus] = useState("Secondary");
    const checkStatus = async () => {
        try {
          //I need to
          var vMixData = await fetch("http://3.95.90.145:8088/api/")
        console.log(vMixData)
        var audioBuses = vMixData.getElementsByTagName("input")[input-1].getAttribute("audiobusses")
        if (!audioBuses) {
            setBusStatus("Secondary")
        }
        if (audioBuses.includes(bus)){
            setBusStatus("Danger")
        } else {
            setBusStatus("Success")
        }
        } catch(err) {
          console.log(err)
          setBusStatus("Secondary")
        }
        
        
        var x = new XMLHttpRequest();
        x.open("GET", "http://3.95.90.145:8088/api/", true);
        x.onreadystatechange = function () {
          if (x.readyState == 4 && x.status == 200) {
            var doc = x.responseXML;
            console.log(doc.getElementsByTagName("input")[103].getAttribute("audiobusses"))
          }
        };
        x.send(null);
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

    x.onreadystatechange = function () {
      if (x.readyState === 4 && x.status === 200) {
        console.log("Request successful!");
      }
    };
    checkStatus()
  };

  return (
    <button
      onClick={() => talkTalent(input, bus)}
      type="button"
      class={"btn" + `btn-${busStatus}` + "m-2"}
    >
      {name}
    </button>
  );
}

export default AudioBtn;
