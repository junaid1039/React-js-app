import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newText, newDate) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].date = newDate;
    setTodos(newTodos);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        className="input"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
