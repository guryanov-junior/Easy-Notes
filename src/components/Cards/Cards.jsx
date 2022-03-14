import React, { useContext, useState } from 'react';
import { CardsContext } from '../../CardsContext';
import { TodoEditForm } from '../TodoEditForm/TodoEditForm';
import { Card } from './Card/Card';
import './Cards.scss';

const Cards = (props) => {
  const { todos, filteredTodos, updateTodo } = useContext(CardsContext);

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
      <Card
        todos={filteredTodos.length > 0 ? filteredTodos : todos}
        setEdit={setEdit}
      />
    </div>
  );
};

export { Cards };
