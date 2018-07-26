import React from 'react';


export default function Form (props) {
  return (
    <form>
      <label htmlFor='textBox'>
        <select onChange={e => props.type(e.target.value)}> 
          <option value="c">Celcius</option>
          <option value="f">Fahrenheit</option>
          <option value="k">Kelvin</option>
        </select>
      </label>
      <input type='text' id='textBox' className='textInput' value={props.value} onChange={e => props.handleConvert(e.target.value)} />
    </form>
  );
}

