import React from 'react';
import { useState } from 'react';
import './inputs.css';

function Inputs({ label, placehr, required, id }) { // props também funciona

  // let values = "asdsd";
  const [valueName, setName] = useState("nome");
  const [valueCargo, setCargo] = useState("cargo");
  const [valueImage, setImage] = useState("imagem");

  function onDigit(e) {
    if (id === "Nome") {
      setName(e.target.value);
      console.log(valueName);
    }
    if (id === "Cargo") {
      setCargo(e.target.value);
      console.log(valueCargo);
    }
    if (id === "Imagem") {
      setImage(e.target.value);
      console.log(valueImage);
    }
  }

  return (
    <div className="inputs">
      <label id={id}>{label} </label>
      <input
        type="text"
        placeholder={placehr}
        id={id}
        required={required}
        onChange={onDigit}
        value={id === "Nome" ? valueName : id === "Cargo" ? valueCargo : valueImage}
      />
    </div>
  );
}

export default Inputs;