import React from 'react';
import TaskItem from './taskItem';
import CheckBox from '../inputs/CheckBox';
import DeleteButton from '../button/deleteButton';

function TaskList({ tasks, toggleTaskStatus, deleteTask }) {
  return (
    <div className="taskList">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="task">
            <TaskItem nome={task.name} descricao={task.description} />
            <CheckBox
              value={task.name}
              onChange={() => toggleTaskStatus(task.id)}
              checked={task.status === "concluída"} 
            />
            <span>{task.status}</span>
            <DeleteButton onDelete={() => deleteTask(task.id)} />
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}

export default TaskList;