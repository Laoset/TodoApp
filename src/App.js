import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskForm  from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <>
    
    <div className='bg-fondo h-screen text-white'>
    <h1 className=' absolute left-2 font-black text-7xl'>TODO APP</h1>
      <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TasksList/>}/>
          <Route path='/create-task' element={<TaskForm/>}/>
          <Route path='/edit-task/:id' element={<TaskForm/>}/>
        </Routes>
     </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;