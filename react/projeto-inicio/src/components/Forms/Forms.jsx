import React, { useState } from 'react';
import Inputs from '../inputs/inputs';
import Dropdown from '../Dropdown/Dropdown';
import ButtonCard from '../ButtonCard/ButtonCard';
import Card from '../Card/Card';
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

  const [selectedOption, setSelectedOption] = useState('');
  const [colaborators, setColaborators] = useState([]);
  const [filter, setFilter] = useState('Todos');

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
    setSelectedOption('');
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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const categorizeColaborators = () => {
    const categories = {
      Aluno: [],
      Professor: [],
      Coordenador: [],
      Administrativo: []
    };

    colaborators.forEach(colaborator => {
      const Time = colaborator[labeldrop];
      if (categories[Time]) {
        categories[Time].push(colaborator);
      }
    });

    return categories;
  };

  const categorizedColaborators = categorizeColaborators();

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
              value={formData[label.trim()]}
              onChange={(e) => handleInputChange(label.trim(), e.target.value)}
            />
          ))}
          <Dropdown
            labeldrop={labeldrop}
            optionsdrop={optionsdrop}
            value={selectedOption}
            onChange={handleDropdownChange}
          />
          <Dropdown
            labeldrop="Selecione o time"
            optionsdrop={['Todos', ...optionsdrop]}
            value={filter}
            onChange={handleFilterChange}
          />
          <ButtonCard text={btntext} id={btnid} onclick={btnonclick} />
        </div>
      </form>
      <div>
        <h3>Colaboradores:</h3>
        {Object.keys(categorizedColaborators).map(category => (
          <div key={category}>
            <h4>{category}:</h4>
            <div className="card-container">
              {categorizedColaborators[category]
                .filter(colaborator => 
                  filter === 'Todos' || colaborator[labeldrop] === filter
                )
                .map((colaborator, index) => (
                  <Card
                    key={index}
                    Nome={colaborator.Nome}
                    Cargo={colaborator.Cargo}
                    Time={colaborator[labeldrop]}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forms;