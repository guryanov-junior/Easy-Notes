import React, { useState } from 'react';
import { TodoEditForm } from '../TodoEditForm/TodoEditForm';
import { Card } from './Card/Card';
import './Cards.scss';

const Cards = (props) => {
  const { todos, removeCard, toggleTodoComplete } = props;

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  if (edit) {
    return <TodoEditForm />;
  }

  return (
    <div className='cards'>
      {todos.length ? (
        <Card
          todos={todos}
          setEdit={setEdit}
          removeCard={removeCard}
          toggleTodoComplete={toggleTodoComplete}
        />
      ) : (
        <h2>There is no todos</h2>
      )}
    </div>
  );
};

export { Cards };
