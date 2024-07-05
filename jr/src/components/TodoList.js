import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      <div className="todo-header">
      <div className="left">
          <span>status</span>
        </div>
        <div class="center">
          <span>Tasks</span>
        </div>
        <div className="right">
          <span>Actions</span>
        </div>
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
