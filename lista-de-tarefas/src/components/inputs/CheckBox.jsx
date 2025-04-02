import React, { useState } from 'react';

function CheckBox({ value, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <input type="checkbox" checked={isChecked} onChange={handleChange} value={value} />
  );
}

export default CheckBox;