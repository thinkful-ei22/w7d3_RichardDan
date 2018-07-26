import React from 'react';
import Form from './form';
import convert from './conversion-formula';
import './app.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {type:'c', value:0},
      b: {type:'c', value:0}
    };
  }

  handleConvert(num, type, letter) {
    if (letter === 'a') {
      this.setState({
        a: {type:this.state.a.type, value: num},
        b: {type:this.state.b.type, value: convert(num, type)}
      });
    } else {
      this.setState({
        a: {type:this.state.a.type, value: convert(num, type.split('').reverse().join(''))},
        b: {type:this.state.b.type, value: num}
      });
    }
  }

  handleTypeA(str) {
    let type = str + this.state.b.type;
    this.setState({
      a : {type:str, value:this.state.a.value},
      b : {type:this.state.b.type, value: convert(this.state.a.value, type)}
    });
  }

  handleTypeB(str) {
    let type = this.state.a.type + str;
    this.setState({
      a : {type:this.state.a.type, value: convert(this.state.b.value, type.split('').reverse().join(''))},
      b : {type:str, value:this.state.b.value}
    });
  }


  render() {
    let type = this.state.a.type + this.state.b.type;
    return (
      <div className='app'>
        <div className='holder'>
          <Form handleConvert={value => this.handleConvert(value, type, 'a')} value={this.state.a.value} type={str => this.handleTypeA(str)}/>
          <Form handleConvert={value => this.handleConvert(value, type, 'b')} value={this.state.b.value} type={str => this.handleTypeB(str)}/>
        </div>
      </div>
    );
  }
}