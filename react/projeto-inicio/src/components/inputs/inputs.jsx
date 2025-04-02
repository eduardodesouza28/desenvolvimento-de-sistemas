import React from 'react';
import './inputs.css';

function Inputs({ label, placehr, required, id, value, onChange }) {
  return (
    <div className="inputs">
      <label id={id}>{label}</label>
      <input
        type="text"
        placeholder={placehr}
        id={id}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Inputs;
