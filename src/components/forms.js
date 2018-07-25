import React from 'react';

export default function Forms() {
  return (
    <form className='tempForm'>
      <label htmlFor='textBox'> Temperature </label>
      <input type='text' id='textBox' className='textInput' placeholder='temperature here'/>
    </form>
  );
}