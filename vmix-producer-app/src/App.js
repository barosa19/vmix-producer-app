import React from "react";

//TODO create a flow so producer selects what they are and then takes them to the page
//TODO create 3 button colors with name amd alter wording on button 
//TODO ADD multiview changing options
//TODO make it responsive
//TODO need to get response from button click and then check status and then alter color
//TODO convert xml to fetch 

function App() {
  const checkStatus = async () => {
    try {
      //I need to
      var vMixData = await fetch("http://3.95.90.145:8088/api/")
    console.log(vMixData)
    var audioBuses = vMixData.getElementsByTagName("input")[103].getAttribute("audiobusses")
    } catch(err) {
      //Here I need to make the button grey and indicate that vMix is not connected
      console.log("This doesn't work!")
      console.log(err)
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
  
  const talkTalent = (bus) => {
      console.log("it works")
      var x = new XMLHttpRequest();
      x.open("GET", `http://3.95.90.145:8088/api/?Function=AudioBus&Input=104&Value=${bus}`, true);
      x.send();
  
      x.onreadystatechange = function() {
          if (x.readyState === 4 && x.status === 200) {
              console.log("Request successful!");
          }
      };
    };


  return (
    <div>
      <img src="./BR_Wordmark_Black.png"  />
      <div class="d-flex justify-content-center mb-3">
        <iframe
          class="d-flex justify-content-center mb-3"
          src="https://advanced.vmixcall.com/call.htm?Key=4314318984&Name=Producer%27"
          width="1280"
          height="720"
          frameborder="0"
          allow="camera;microphone;fullscreen"
          allowfullscreen=""
        ></iframe>
      </div>
      <div class="d-flex justify-content-center">
        <button onClick={checkStatus} type="button" id="cs1" class="btn btn-primary m-2">
          Check Status
        </button>
        <button onClick={() => talkTalent("A")} type="button" id="t1" class="btn btn-success m-2">
          Talk to Talent 1
        </button>
        <button type="button" id="t2" class="btn btn-success m-2">
          Talk to Talent 2
        </button>
        <button type="button" id="t3" class="btn btn-success m-2">
          Talk to Talent 3
        </button>
      </div>
      <script src="./script.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
