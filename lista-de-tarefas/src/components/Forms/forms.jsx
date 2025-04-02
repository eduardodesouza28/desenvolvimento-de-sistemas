import React, { useState } from 'react';
import Inputs from '../inputs/inputs';
import Button from '../button/button';
import TaskList from '../taskList/taskList';

function Forms({ labelsinput, placeholderinput, btntext, btnid }) {
  const textLabels = labelsinput;
  const splitTextLabels = textLabels.split(",");
  const textplacehr = placeholderinput;
  const splitTextplacehr = textplacehr.split(",");

  const [formData, setFormData] = useState({
    Nome: "",
    Descricao: "",
  });

  const [tasks, settasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newtask = {
      Nome: formData.Nome,
      Descricao: formData.Descricao,
    };

    settasks(prevtasks => [...prevtasks, newtask]);

    setFormData({
      Nome: "",
      Descricao: "",
    });
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
          <Button text={btntext} id={btnid} />
        </div>
      </form>
      <div>
        <h3>Colaboradores:</h3>
        <TaskList tasks={tasks} /> {/* Passando a lista de tarefas para TaskList */}
      </div>
    </section>
  );
}

export default Forms;