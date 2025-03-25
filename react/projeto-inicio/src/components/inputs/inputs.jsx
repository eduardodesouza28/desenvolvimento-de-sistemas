import React from 'react';
import './inputs.css';

function Inputs({label,placehr}) { // props também funciona
  return (
    <div className="inputs">
      <label>{label} </label>
      <input type="text" placeholder={placehr} />
    </div>
  );
}

export default Inputs;