// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DivisorTask from './components/DivisorTask';
//COMPONENTES!
import TaskForm  from './components/TaskForm';
import TasksList from './components/TasksList';
import Title from './components/Title';

function App() {
  return (
    <div className='flex justify-center align-middle bg-fondo min-h-screen h-full text-white '>
      <div className='container max-w-xl flex flex-col mt-20'>
      <Title/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<DivisorTask/>, <TasksList/>]}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;