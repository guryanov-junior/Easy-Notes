import React, { useState } from 'react';
import { TodoEditForm } from '../TodoEditForm/TodoEditForm';
import { Card } from './Card/Card';
import './Cards.scss';

const Cards = (props) => {
  const { todos, filteredTodos, updateTodo, removeCard, toggleTodoComplete } =
    props;

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoEditForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className='cards'>
      {filteredTodos.length > 0 ? (
        <Card
          todos={filteredTodos}
          setEdit={setEdit}
          removeCard={removeCard}
          toggleTodoComplete={toggleTodoComplete}
        />
      ) : (
        <Card
          todos={todos}
          setEdit={setEdit}
          removeCard={removeCard}
          toggleTodoComplete={toggleTodoComplete}
        />
      )}
    </div>
  );
};

export { Cards };
