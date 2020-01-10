import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  let talkData = require('./resources/topicData.json');
  let topicNum = talkData.length
  const [randNumb, setRandNumb] = useState(Math.floor(Math.random() * topicNum + 1));

  return (
    <div className="App"
      style={{ background: 'lightgray' }}
    >
      <header className="App-header1">
        <h1>DeltaPeng's Talking point compilation (ver 1.200109)</h1>
        <img src={logo} className="App-logo" alt="logo"
          width="140"
          style={{ padding: '0px', margin: '0px', height: '100px' }} />
      </header>
      <div className="Body">
        <div>
          <h3 style={{ marginLeft: "50px", marginRight: "50px" }}>Rand number: {randNumb}<br />
            {talkData[randNumb - 1].content}<br />
            {talkData[randNumb - 1].answer ? "ans: " + talkData[randNumb - 1].answer + "<br />" : ""}
            <br />
            Probably from: {talkData[randNumb - 1].source}
          </h3>
          <button name="clickMe"
            style={{ width: '370px', padding: '25px' }}
            onClick={() => setRandNumb(Math.floor(Math.random() * topicNum + 1))} >
            Change Talking Point
              </button>
        </div>
      </div>

      <div className="Footer"
        style={{ background: 'gray' }}>
        <hr />
        ©2019 DeltaPeng
        <br />
        <br />  
      </div>
    </div>
  );
}

export default App;
