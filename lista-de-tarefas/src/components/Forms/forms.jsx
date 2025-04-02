import React, { useState } from 'react';
import Inputs from '../inputs/inputs';
import Button from '../button/button';
import TaskList from '../taskList/taskList';
import FilterBar from '../FilterBar/FilterBar'; // Importando o FilterBar

function Forms({ labelsinput, placeholderinput, btntext, btnid }) {
  const textLabels = labelsinput;
  const splitTextLabels = textLabels.split(",");
  const textplacehr = placeholderinput;
  const splitTextplacehr = textplacehr.split(",");

  const [formData, setFormData] = useState({
    Nome: "",
    Descricao: "",
  });

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // Estado para o filtro

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1, // Gerando um ID simples
      name: formData.Nome,
      description: formData.Descricao,
      status: "pendente", // Status inicial
    };

    setTasks(prevTasks => [...prevTasks, newTask]);

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

  const toggleTaskStatus = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === "pendente" ? "concluída" : "pendente" }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id)); // Removendo a tarefa
  };

  // Filtrando as tarefas com base no estado do filtro
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.status === 'concluída';
    if (filter === 'pending') return task.status === 'pendente';
    return true; // Para 'all'
  });

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
              onChange={(e) => handleInputChange(label.trim(), e.target.value)} // Chamando a função handleInputChange
            />
          ))}
          <Button text={btntext} id={btnid} />
        </div>
      </form>
      <FilterBar setFilter={setFilter} /> {/* Adicionando o FilterBar */}
      <div>
        <h3>Tarefas:</h3>
        <TaskList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} /> {/* Passando as tarefas filtradas */}
      </div>
    </section>
  );
}

export default Forms;