// import React, { useState } from 'react';
// import Inputs from '../inputs/inputs';
// import Button from '../button/button';
// import TaskList from '../taskList/taskList';

// function Forms({ labelsinput, placeholderinput, btntext, btnid }) {
//   const textLabels = labelsinput;
//   const splitTextLabels = textLabels.split(",");
//   const textplacehr = placeholderinput;
//   const splitTextplacehr = textplacehr.split(",");

//   const [formData, setFormData] = useState({
//     Nome: "",
//     Descricao: "",
//   });

//   const [tasks, settasks] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newtask = {
//       Nome: formData.Nome,
//       Descricao: formData.Descricao,
//     };

//     settasks(prevtasks => [...prevtasks, newtask]);

//     setFormData({
//       Nome: "",
//       Descricao: "",
//     });
//   }



//   return (
//     <section className='forms'>
//       <form onSubmit={handleSubmit}>
//         <div className="forms">
//           {splitTextLabels.map((label, index) => (
//             <Inputs
//               key={index}
//               id={label}
//               label={label}
//               placehr={splitTextplacehr[index]}
//               required={true}
//               value={formData[label.trim()] || ""}
//               onChange={(e) => handleInputChange(label.trim(), e.target.value)}
//             />
//           ))}
//           <Button text={btntext} id={btnid} />
//         </div>
//       </form>
//       <div>
//         <h3>Tarefas:</h3>
//         <TaskList tasks={tasks} />
//       </div>
//     </section>
//   );
// }

// export default Forms;

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

  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1, // Gerando um ID simples
      name: formData.Nome,
      description: formData.Descricao,
      status: "pendente",
    };

    setTasks(prevTasks => [...prevTasks, newTask]);

    setFormData({
      Nome: "",
      Descricao: "",
    });
  }

  const toggleTaskStatus = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === "pendente" ? "concluída" : "pendente" }
          : task
      )
    );
  };

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
        <TaskList tasks={tasks} toggleTaskStatus={toggleTaskStatus} /> {/* Passando a função de toggle */}
      </div>
    </section>
  );
}

export default Forms;