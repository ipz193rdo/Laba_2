import React from 'react'

const Form = ({input, setInput, todos, setTodos, index}) => {
  
const onInputChange = (event) =>{
    setInput(event.target.value)
}  


const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, {id:index+1, name:input }])
    setInput("")
}
  
return (
    <form onSubmit={onFormSubmit} >
        <div className='product'>
            <input placeholder='Product Name' value={input} required onChange={onInputChange}/>
            <button>Додати</button>
        </div>
    </form>
  )
}

export default Form