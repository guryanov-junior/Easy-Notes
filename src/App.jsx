import React, { useRef, useState } from 'react';
import './App.scss';
import { Cards } from './components/Cards/Cards';
import { TodoForm } from './components/TodoForm/TodoForm';
import { Loader } from './components/UI/Loader/Loader';

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();

  const updateTodosWithSave = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      completed: false,
    };
    if (inputRef.current.value !== '') {
      const newTodos = [...todos, newTodo];
      updateTodosWithSave(newTodos);
    }

    inputRef.current.value = '';
  };

  const toggleTodoComplete = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    updateTodosWithSave(updatedTodos);
  };

  const removeCard = (todoId) => {
    const filteredTodos = todos.filter((todo) => todoId !== todo.id);
    updateTodosWithSave(filteredTodos);
  };

  const getPosts = async () => {
    try {
      setIsLoading(true);
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
        .then((response) => response.json())
        .then((json) => {
          updateTodosWithSave([...todos, ...json]);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const clearPostList = () => {
    updateTodosWithSave([]);
  };

  return (
    <div className='app'>
      <h1>TODO List</h1>
      <hr />
      <TodoForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        getPosts={getPosts}
        clearPostList={clearPostList}
      />
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <Cards
          todos={todos}
          removeCard={removeCard}
          toggleTodoComplete={toggleTodoComplete}
        />
      )}
    </div>
  );
};

export { App };
