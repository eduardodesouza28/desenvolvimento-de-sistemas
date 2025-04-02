import React from 'react';

function DeleteButton({ onDelete }) {
  return (
    <button className="delete-button" onClick={onDelete}>
      Remover
    </button>
  );
}

export default DeleteButton;