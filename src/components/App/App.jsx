import React, { useRef, useState } from 'react';
import './App.scss';
import { Cards } from '../Cards/Cards';
import { TodoForm } from '../TodoForm/TodoForm';
import { Loader } from '../UI/Loader/Loader';

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
      const newTodos = [newTodo, ...todos];
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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    updateTodosWithSave(
      todos.map((item) => (item.id === todoId ? newValue : item))
    );

    // setFilteredTodos(newValue);
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

  const toggleTitleStyle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className='app'>
      <h1 className={isActive ? 'out-title' : 'in-title'}>TODO List</h1>

      <TodoForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        getPosts={getPosts}
        clearPostList={clearPostList}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <Cards
          todos={todos}
          updateTodo={updateTodo}
          removeCard={removeCard}
          toggleTodoComplete={toggleTodoComplete}
        />
      )}
    </div>
  );
};

export { App };
