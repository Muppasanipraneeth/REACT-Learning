import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Todos } from './Todos';
import CreateTodo from './CreateTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todo');
        setTodos(response.data);
      } catch (error) {
        console.error('There was an error fetching todos!', error);
      }
    };

    fetchTodos();
  }, []);

  const updateTodoStatus = async (todoId, newStatus) => {
    try {
      const response = await axios.put('http://localhost:3000/completed', {
        id: todoId,
        completed: newStatus
      });

      // Update the todos state with the new status
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === todoId ? { ...todo, completed: newStatus } : todo
        )
      );
    } catch (error) {
      console.error('There was an error updating the todo!', error);
    }
  };

  return (
    <div>
        <CreateTodo />
      <Todos todos={todos} onUpdateTodoStatus={updateTodoStatus} />
    </div>
  );
};

export default TodoList;
