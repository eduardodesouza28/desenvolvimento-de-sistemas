import React, { useState } from 'react';
import TaskItem from './taskItem';
import CheckBox from '../inputs/CheckBox';

function TaskList({ tasks }) {
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleCheckboxChange = (taskId, isChecked) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: isChecked,
    }));
  };

  return (
    <div className="taskList">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index}>
            <TaskItem nome={task.Nome} descricao={task.Descricao} />
            <CheckBox value={task.Nome} onChange={(isChecked) => handleCheckboxChange(task.Nome, isChecked)} />
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}

export default TaskList;