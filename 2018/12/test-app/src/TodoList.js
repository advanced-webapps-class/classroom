import React from 'react';

const TodoList = (props) => {
  
  return (
    <ul>
    {
      props.list.map((item, index)=> {
        return (
          <li key={index}>{item.title}</li>
        )
      })
    }
  </ul>
  );
};

export default TodoList;