import React from 'react';

function TaskItem({ nome, descricao }) {
  return (
    <div className="taskItem">
      <p>Nome: {nome}</p>
      <p>Descrição: {descricao}</p>
    </div>
  );
}

export default TaskItem;