import React from 'react';
import Forms from './forms';
import Response from './response';
import convertCelcius from './conversion-formula';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number : 20
    };
  }
  
  render() {
    return (
      <div>
        <Forms temp={this.state.number} handleConversion={number => {

          this.setState({ number })}
          }/>
        <Response temp={convertCelcius(this.state.number)}/>
      </div>
    );
  }
}