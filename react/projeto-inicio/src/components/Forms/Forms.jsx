import React, { useState } from 'react';
import Inputs from '../inputs/inputs';
import Dropdown from '../Dropdown/Dropdown';
import ButtonCard from '../ButtonCard/ButtonCard';
import './Forms.css';

function Forms({ labelsinput, placeholderinput, labeldrop, optionsdrop, btntext, btnid, btnonclick }) {
  const textLabels = labelsinput;
  const splitTextLabels = textLabels.split(",");
  const textplacehr = placeholderinput;
  const splitTextplacehr = textplacehr.split(",");

  const [formData, setFormData] = useState({
    Nome: "",
    Cargo: "",
    Imagem: ""
  });

  const [selectedOption, setSelectedOption] = useState(optionsdrop[0] || '');
  const [colaborators, setColaborators] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newColaborator = {
      Nome: formData.Nome,
      Cargo: formData.Cargo,
      Imagem: formData.Imagem,
      [labeldrop]: selectedOption
    };

    setColaborators(prevColaborators => [...prevColaborators, newColaborator]);

    setFormData({
      Nome: "",
      Cargo: "",
      Imagem: ""
    });
    setSelectedOption(optionsdrop[0] || '');
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className='forms'>
      <form onSubmit={handleSubmit}>
        <div className="forms">
          {splitTextLabels.map((label, index) => (
            <Inputs
              key={index}
              id={label}
              label={label}
              placehr={splitTextplacehr[index]}
              required={true}
              value={formData[label.trim()] || ""}
              onChange={(e) => handleInputChange(label.trim(), e.target.value)}
            />
          ))}
          <Dropdown
            labeldrop={labeldrop}
            optionsdrop={optionsdrop}
            value={selectedOption}
            onChange={handleDropdownChange}
          />
          <ButtonCard text={btntext} id={btnid} onclick={btnonclick} />
        </div>
      </form>
      <div>
        <h3>Colaboradores:</h3>
        <ul>
          {colaborators.map((colaborator, index) => (
            <li key={index}>
              {colaborator.Nome} - {colaborator.Cargo} - {colaborator.Imagem} - {colaborator[labeldrop]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Forms;