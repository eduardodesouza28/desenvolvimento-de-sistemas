import React from 'react';

function Inputs({ label, placehr, required, id, value, onChange }) {
  return (
    <div className="inputs">
      <label htmlFor={id}>{label}</label>
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