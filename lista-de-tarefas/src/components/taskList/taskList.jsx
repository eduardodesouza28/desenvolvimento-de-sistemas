import React from 'react';
import TaskItem from './taskItem';
import CheckBox from '../inputs/CheckBox';

function TaskList({ tasks, toggleTaskStatus }) {
  return (
    <div className="taskList">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id}>
            <TaskItem nome={task.name} descricao={task.description} />
            <CheckBox
              value={task.name}
              onChange={() => toggleTaskStatus(task.id)} // Chamando a função de toggle
              checked={task.status === "concluída"} // Definindo o estado do checkbox
            />
            <span>{task.status}</span> {/* Exibindo o status da tarefa */}
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}

export default TaskList;