import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      date: date,
      completed: false
    });
    setValue('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task..."
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="date"
        className="input date-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TodoForm;
