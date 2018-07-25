import React from 'react';

// export default class Forms extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state ={
//       num: 20
//     };
//   }
//   render() { 
    
//     return (


//       <form className='tempForm' onSubmit={e => {
//         e.preventDefault();
//         this.props.handleConversion(this.state.num);
//       }}>
//         <label htmlFor='textBox'> Temperature </label>
//         <input type='text' id='textBox' className='textInput' onChange={ e => this.setState({num: e.target.value})} />
//         <button type='submit'>Submit</button>
//       </form>
//     );
//   }
// }

export default function Forms(props) {
  return (
    <form onSubmit={e=> props.onSubmit(e)}>
      <label htmlFor='textBox'> Temperature </label>
      <input type='text' id='textBox' className='textInput' onChange={ e => props.onChangeHolderNum(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  );
}