import React from "react";
import ProducerCaller from "./components/ProducerCall";
import AudioBtn from "./components/AudioBtn";

//TODO create a flow so producer selects what they are and then takes them to the page
//TODO create 3 button colors with name amd alter wording on button 
//TODO ADD multiview changing options
//TODO make it responsive
//TODO need to get response from button click and then check status and then alter color
//TODO convert xml to fetch 

function App() {

  return (
    <div>
      <div class="d-flex justify-content-center mb-3">
        <ProducerCaller />
      </div>
      <div class="d-flex justify-content-center">
        <AudioBtn input={104} bus="A" name="Talk to Talent 1"/>
        <AudioBtn input={104} bus="B" name="Talk to Talent 2"/>
        <AudioBtn input={104} bus="B" name="Talk to Talent 3"/>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
