import React from 'react'

const TodoList = ({todos, setTodos}) => {

    const handleDelete = ({name}) => {
        setTodos(todos.filter((todo) => todo.name !== name))
    }

  return (
    <div>
        {todos.map((todo)=>
            <li key={todo.id} className="li_todo product_res ">
                <div><h3>{todo.id}. {todo.name}</h3></div>
                <div className='btn_del'>
                    <button  onClick={() => handleDelete(todo)}>Delete</button>
                </div>
            </li>
        )}
    </div>
  )
}

export default TodoList