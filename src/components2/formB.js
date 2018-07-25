import React from 'react';

export default function FormB(props) {
  return (
    <form>
      <label htmlFor='textBox'> F </label>
      <input type='text' id='textBox' className='textInput' onChange={e => props.handleF(e.target.value)} value={props.f}/>
    </form>
  );
}