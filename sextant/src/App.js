import React, { Component } from 'react';
import Title from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Title />
      <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="I'm also an exhibit!"></Exhibit>
                <Exhibit name="Don't forget about me, I'm an exhibit too!"></Exhibit>
    </div>
  );
}
export default App;
