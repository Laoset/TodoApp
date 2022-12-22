import React, {useState, useEffect, useRef} from 'react'
import {HiCheck} from 'react-icons/hi'

const TodoForm = (props) => {
    //Mi estado
    const [input, setInput] = useState('')
    //REF me sirve para user el metodo focus!
    const inputRef = useRef(null)
    //Use Effect!
    useEffect(()=>{
        //Aca hago que mi focus este en el lugar donde este INPUTREF!
        inputRef.current.focus()
    })
    //Mi controlador de form submit
    const handleSubmit = evento=>{
        evento.preventDefault();
        //info de lo que haga al hacer submit
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    //Mi setInput actualiza el estado con lo que tenga en evento
    const handleChange= evento =>{
        setInput(evento.target.value)
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder='Add a Todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'><HiCheck className='iconOk'/></button>
    </form>
  )
}

export default TodoForm