import React from 'react';
import Inputs from '../inputs/inputs';
import './Forms.css';

function Forms({ labels, placehr }) {
  const textLabels = labels;
  const splitTextLabels = textLabels.split(",");
  const textplacehr = placehr;
  const splitTextplacehr = textplacehr.split(",");

  return (
    <div className="forms">
      {splitTextLabels.map((label, index) => (
        <Inputs 
          key={index}
          label={label} 
          placehr={splitTextplacehr[index]} 
        />
      ))}
    </div>
  );
}

export default Forms;