import React from "react";
import ProducerCaller from "./components/ProducerCall";
import AudioBtn from "./components/AudioBtn";
import ReturnBtn from "./components/ReturnBtn";
import Header from "./components/Header";

//TODO create a flow so producer selects what machine and what producer
//TODO make it responsive
//TODO convert xml to fetch

function App() {
  return (
    <div>
      <Header />
      <div className="d-inline-flex justify-content-center">
        <ProducerCaller />
        <div className="col-2 d-flex flex-column my-4">
          <ReturnBtn input={104} output="Output1" name="Program" />
          <ReturnBtn input={104} output="Output2" name="Multiviewer" />
          <AudioBtn input={104} bus="A" name="Talent 1" />
          <AudioBtn input={104} bus="B" name="Talent 2" />
          <AudioBtn input={104} bus="B" name="Talent 3" />
        </div>
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
