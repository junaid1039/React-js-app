import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDate, setNewDate] = useState(todo.date);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(index, newText, newDate);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <div className="todo">
      <div className="left">
        <span className="index">{index + 1}.</span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(index)}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </>
        ) : (
          <div className='todos'>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <span className="date">{todo.date}</span>
          </div>
        )}
      </div>
      <div className="right">
        <FaEdit onClick={handleEdit} className="icon" />
        <FaTrash onClick={() => deleteTodo(index)} className="icon delete-icon" />
      </div>
    </div>
  );
};

export default TodoItem;
