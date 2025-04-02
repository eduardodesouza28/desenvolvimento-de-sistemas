import React, { useState } from 'react';

function CheckBox({ value, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked); // Chama a função de callback para atualizar o estado no componente pai
  };

  return (
    <input type="checkbox" checked={isChecked} onChange={handleChange} value={value} />
  );
}

export default CheckBox;