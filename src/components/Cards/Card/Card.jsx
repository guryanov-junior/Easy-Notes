import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Card.scss';
import { TodoIcons } from './TodoIcons/TodoIcons';

const Card = (props) => {
  const { todos, setEdit, removeCard, toggleTodoComplete } = props;

  return (
    <TransitionGroup className='todo-list'>
      {todos.map((todo) => (
        <CSSTransition
          key={todo.id}
          unmountOnExit
          timeout={500}
          classNames='item'
        >
          <div
            className={todo.completed ? 'todo-card-inactive' : 'todo-card'}
            key={todo.id}
          >
            <TodoIcons
              todo={todo}
              setEdit={setEdit}
              removeCard={removeCard}
              toggleTodoComplete={toggleTodoComplete}
            />

            <div className={todo.completed ? 'completed' : ''}>
              <div className='todo-text'>{todo.title}</div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export { Card };
