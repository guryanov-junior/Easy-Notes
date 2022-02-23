import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Card.scss';

const Card = (props) => {
  const { todos, removeCard, toggleTodoComplete } = props;

  return (
    <TransitionGroup className='todo-list'>
      {todos.map((todo, index) => (
        <CSSTransition
          key={todo.id}
          unmountOnExit
          timeout={500}
          classNames='item'
        >
          <div className='card' key={todo.id}>
            <span onClick={() => removeCard(todo.id)}>
              <FaTrashAlt />
            </span>

            <div
              className={todo.completed ? 'completed' : ''}
              onClick={() => toggleTodoComplete(todo.id)}
            >
              <p className='title'>Todo №{index + 1}</p>
              <p>{todo.title}</p>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export { Card };
