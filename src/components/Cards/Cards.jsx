import React from 'react';
import { Card } from './Card/Card';
import './Cards.scss';

const Cards = (props) => {
  const { todos, removeCard, toggleTodoComplete } = props;

  return (
    <div>
      <div className='cards'>
        {todos.length ? (
          <Card
            todos={todos}
            removeCard={removeCard}
            toggleTodoComplete={toggleTodoComplete}
          />
        ) : (
          <h2>There is no todos</h2>
        )}
      </div>
    </div>
  );
};

export { Cards };
