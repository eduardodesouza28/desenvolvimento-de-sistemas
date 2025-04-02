import './button.css'
import React from 'react';

function Button({ text, id, onClick }) {
  return (
    <div>
      <button className="button-card" id={id} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;