import React, { useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../../context/todo/todoContext';

const Todos = () => {
  const todoContext = useContext(TodoContext);

  const { todos, getTodos, loading, filtered } = todoContext;

  useEffect(() => {
    getTodos();
    console.log(todos);
    // eslint-disable-next-line
  },[]);

  if(todos !== null && todos.length === 0 && !loading) {
    return <h4>There are no todos.</h4>
  }

  if(filtered.length === 0){
    return (
      <ul className="list-group">
        {todos !== null && !loading ?
          (todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))) : (
            <li className="list-group-item">Loading ...</li>
          )
        }
      </ul>
    )
  } else {
    return (
      <ul className="list-group">
        {filtered !== null && !loading ?
          (filtered.map(oneFiltered => (
            <TodoItem key={oneFiltered.id} todo={oneFiltered} />
          ))) : (
            <li className="list-group-item">Loading ...</li>
          )
        }
      </ul>
    )
  }
}

export default Todos