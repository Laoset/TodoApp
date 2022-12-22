import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () => {
    //Mi estado de todos
  const [todos, setTodos]= useState([])
    //Workkkk
  const addTodo = (todo) => {
        //Me traigo todos los todo que tengo mas lo nuevo que agrego
    const newTodos = [todo, ...todos];
    //Seteamos en el estado los nuevos todo
    setTodos(newTodos);
  };
  //Funcion de actualizar mi TODO!
  const updateTodo = (todoId, newValue)=>{
    //actualizo el estado con mi id todo
    setTodos(prev => prev.map(item=> (item.id===todoId ? newValue:item)))
  }

  //Funcion para eliminar TODO!
  const removeTodo= id=>{
    //Logica de : traigo mis todos y solo guardo en ARR los distintos al id seleccionado, osea  todos menos los eliminados
    const removeArr = [...todos].filter(todo=> todo.id !== id)
    //Actualizo mi estado con el Arr que no tiene mas ese elemento id pickeado
    setTodos(removeArr)
  }
//Esta completo mi TODO?
  const completeTodo= id => {
    let updatedTodos = todos.map(todo=>{
      //Si cada todo que tengo le hago click o sea esta completo, le cambio el estado a true o false
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      //Retorno mi todo mapeado
      return todo
    })
    //Actualizo mi estado de todos
    setTodos(updatedTodos)
  } 
  return (  
    <div>
        <h1>What do whe do?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
        updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList