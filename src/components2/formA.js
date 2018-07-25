import React from 'react';


export default function FormA (props) {
  return (
    <form>
      <label htmlFor='textBox'> C </label>
      <input type='text' id='textBox' className='textInput' value={props.c} onChange={e => props.handleC(e.target.value)} />
    </form>
  );
}

