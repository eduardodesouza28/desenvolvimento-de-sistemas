import React from 'react';
import { useState } from 'react';
import Inputs from '../inputs/inputs';
import Dropdown from '../Dropdown/Dropdown';
import ButtonCard from '../ButtonCard/ButtonCard';
import './Forms.css';

function Forms({ labelsinput, placeholderinput, labeldrop, optionsdrop, btntext, btnid, btnonclick }) {
  const textLabels = labelsinput;
  const splitTextLabels = textLabels.split(",");
  const textplacehr = placeholderinput;
  const splitTextplacehr = textplacehr.split(",");
  const [valueName, setName] = useState("nome");
  const [valueCargo, setCargo] = useState("cargo");
  const [valueImage, setImage] = useState("imagem");

  function alert(e) {
    e.preventDefault();
    console.log("teste");
  }

  function aoAlterarNome(valor) {
    setName(valor);
  }
  function aoAlterarCargo(valor) {
    setCargo(valor);
  }
  function aoAlterarImagem(valor) {
    setImage(valor);
  }

  return (
    <section className='forms'>
      <form onSubmit={alert}>
        <div className="forms">
          {splitTextLabels.map((label, index) => (
            <Inputs
              key={index}
              id={label}
              label={label}
              placehr={splitTextplacehr[index]}
              required={true}
              aoAlterar={label === "Nome" ? aoAlterarNome : label === "Cargo" ? aoAlterarCargo : aoAlterarImagem
              }
            />
          ))}
          <Dropdown labeldrop={labeldrop} optionsdrop={optionsdrop} />
          <ButtonCard text={btntext} id={btnid} onclick={btnonclick} />
        </div>
      </form>
    </section>
  );
}

export default Forms;