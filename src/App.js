import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskForm  from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className='max-h-[100vh] bg-fondo h-screen w-screen text-white '>
      <div className='flex flex-col justify-center align-middle text-center p-1 sm:absolute sm:left-[39%] sm:top-8 md:right-screen left-[30%] '>
        <h1 className='text-6xl font-black sm:text-7xl'>TODO APP</h1>
      </div>
      <div className='flex items-center justify-center h-[75%]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;