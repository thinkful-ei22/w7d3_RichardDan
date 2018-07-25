import React from 'react';
import Forms from './forms';
import Response from './response';
import convertCelcius from './conversion-formula';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number : 20,
      holderNum: 20
    };
  }
  

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
      number: this.state.holderNum
    });
  }

  handleHolderNum(value) {
    this.setState({
      holderNum: value
    });
  }

  render() {
    return (
      <div>
        {/* <Forms onSubmit={event => this.handleOnSubmit(event)} onChangeHolderNum={value => this.handleHolderNum(value)}/> */}
        <Forms handleConversion={number => this.setState({ number })}/>
        <Response temp={convertCelcius(this.state.number)}/>
      </div>
    );
  }
}