import React from 'react';
import FormA from './formA';
import FormB from './formB';
// import { convertC, convertF } from './conversion-formula';

function convertC(num) {
  return num * 1.8 + 32;
}

function convertF(num) {
  return (num - 32) * 0.5556;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      c : 20,
      f: 68
    }
  }

  handleConvertC(num){
    this.setState({c: num, f: convertC(num)});
  }

  handleConvertF(num) {
    this.setState({ f: num, c: convertF(num) });
  }

  render() {
    return (
      <div>
        <FormA handleC={c => this.handleConvertC(c)} c={this.state.c}/>
        <FormB handleF={f => this.handleConvertF(f)} f={this.state.f}/>
      </div>
    );
  }
}