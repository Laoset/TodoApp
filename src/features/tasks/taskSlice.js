import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id: '1',
        title: 'Task 1 test',
        description: 'Task 1 description',
        status: 'incompleto'
    },
] 

export const taskSlice = createSlice({
    name: 'tasks',
    //Esto es simil al estado inicial de React
    initialState,
    //Esto es simil al setState de React
    reducers: {
        //Action es el dato que se la pasa, State es el estado actual de la appp
        addTask: (state, action) =>{
            //Anade lo que tenga el payload al state inicial
            state.push(action.payload);
        },
        deleteTask: (state, action)=>{
            const encontrado = state.find(task=> task.id === action.payload)
            if(encontrado){
                state.splice(state.indexOf(encontrado),1)
            }
        },
        updateTask: (state, action)=>{
            const {id, title, description, status} = action.payload
            const found = state.find(task=> task.id === id)
            if(found){
                found.title= title
                found.description = description
                found.status = status
            }
        }
    }

})
//Desde otras partes puedo acceder a ADDTASK
export const {addTask, deleteTask,updateTask} = taskSlice.actions
export default taskSlice.reducer