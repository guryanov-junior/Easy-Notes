import React, { useRef, useState } from 'react';
import './App.scss';
import { Cards } from '../Cards/Cards';
import { TodoForm } from '../TodoForm/TodoForm';
import { Loader } from '../UI/Loader/Loader';
import { OnlineClock } from '../auxiliary/OnlineClock/OnlineClock';
import { DateToday } from '../auxiliary/DateToday/DateToday';
import { CardsContext } from '../../CardsContext';

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const inputRef = useRef();

  const updateTodosWithSave = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: inputRef.current.value,
      completed: false,
    };
    if (inputRef.current.value !== '') {
      const newTodos = [newTodo, ...todos];
      updateTodosWithSave(newTodos);
      setFilteredTodos(newTodos);
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
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      return;
    }
    updateTodosWithSave(
      todos.map((item) => (item.id === todoId ? newValue : item))
    );
    setFilteredTodos(newValue);
    inputRef.current.value = '';
  };

  const removeCard = (todoId) => {
    const filteredTodos = todos.filter((todo) => todoId !== todo.id);
    updateTodosWithSave(filteredTodos);
    setFilteredTodos(filteredTodos);
  };

  const getPosts = async () => {
    try {
      setIsLoading(true);
      await fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
        .then((response) => response.json())
        .then((json) => {
          updateTodosWithSave([...todos, ...json]);
          setFilteredTodos([...todos, ...json]);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const clearPostList = () => {
    updateTodosWithSave([]);
    setFilteredTodos([]);
  };

  const toggleTitle = () => {
    setIsToggled((prev) => (prev = !prev));
  };

  const searchTodo = (value) => {
    const filteredList = todos.filter((todo) => {
      return todo.title.search(value.toLowerCase()) !== -1;
    });
    setFilteredTodos(filteredList);
  };

  return (
    <div className='app'>
      <div className='common'>
        <div className='title-bar'>
          <DateToday isToggled={isToggled} />
          <h1 className='title' onClick={toggleTitle}>
            Easy Notes
          </h1>
          <OnlineClock isToggled={isToggled} />
        </div>
      </div>

      <TodoForm
        addTodo={addTodo}
        inputRef={inputRef}
        getPosts={getPosts}
        clearPostList={clearPostList}
        searchTodo={searchTodo}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <CardsContext.Provider
          value={{
            todos,
            filteredTodos,
            updateTodo,
            removeCard,
            toggleTodoComplete,
          }}
        >
          <Cards />
        </CardsContext.Provider>
      )}
    </div>
  );
};

export { App };
