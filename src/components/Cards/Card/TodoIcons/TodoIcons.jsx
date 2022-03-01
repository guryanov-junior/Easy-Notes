import React from 'react';
import { AiOutlineDelete, AiTwotoneEdit } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import './TodoIcons.scss';

const TodoIcons = (props) => {
  const { todo, setEdit, removeCard, toggleTodoComplete } = props;

  return (
    <div className='todo-icons'>
      <span
        className={todo.completed ? 'task-completed-active' : 'task-completed'}
        onClick={() => toggleTodoComplete(todo.id)}
      >
        <FaCheck />
      </span>

      <span className='todo-edit'>
        <AiTwotoneEdit
          onClick={() => {
            setEdit({
              id: todo.id,
              value: todo.title,
            });
          }}
        />
      </span>

      <span className='todo-remove' onClick={() => removeCard(todo.id)}>
        <AiOutlineDelete />
      </span>
    </div>
  );
};

export { TodoIcons };
