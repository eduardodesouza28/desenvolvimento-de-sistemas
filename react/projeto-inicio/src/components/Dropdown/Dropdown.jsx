import React from 'react';
import './Dropdown.css';

function Dropdown({ labeldrop, optionsdrop }) {
  return (
    <div className="dropdown">
      <label>{labeldrop}</label>
      <select>
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
