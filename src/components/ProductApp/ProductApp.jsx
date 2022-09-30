import React from 'react'
import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';


const products = [
  {id:1, name:"Mouse"},
  {id:2, name:"Keyboard"},
  {id:3, name:"Monitor"},
]



const ProductApp = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([...products]);

      const last = todos[todos.length-1]
      const index = last.id
    
  return (
    <div className='product__container size'>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      index={index}
      />
      <TodoList todos={todos} setTodos={setTodos}/>
    
    </div>
  );
}

export default ProductApp