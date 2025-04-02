import React from 'react';
import './Dropdown.css';

function Dropdown({ labeldrop, optionsdrop, value, onChange }) {
  return (
    <div className="dropdown">
      <label>{labeldrop}</label>
      <select value={value} onChange={onChange}>
        {optionsdrop.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;