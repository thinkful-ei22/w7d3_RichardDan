import React from 'react';
import Forms from './forms';
import Response from './response';

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
        <Forms />
        <Response />
      </div>
    );
  }
}