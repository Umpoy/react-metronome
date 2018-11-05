import React, { Component } from 'react';
import './assets/css/App.css';
import click1 from './assets/sounds/click1.wav';
import click2 from './assets/sounds/click2.wav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBPMChange = event => {
    const bpm = event.target.value;
    this.setState({ bpm });
  }

  sound = () => {
    this.click1.play();
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metroname">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" value={bpm} onChange={this.handleBPMChange} />
        </div>
        <button>{playing ? 'Stop' : 'Start'}</button>
        <button onClick={this.sound}></button>
      </div >
    )
  }
}

export default App;