import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Card.scss';
import { TodoIcons } from './TodoIcons/TodoIcons';

const Card = (props) => {
  const { todos, setEdit } = props;

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
            <div className='todo-icons'>
              <TodoIcons todo={todo} setEdit={setEdit} />
            </div>

            <div className={todo.completed ? 'completed' : 'todo'}>
              <div className='todo-text'>{todo.title}</div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export { Card };
