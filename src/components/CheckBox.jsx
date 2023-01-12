import React from 'react'

const CheckBox = ({task, updateTask}) => {
    
    const handleChange= (e)=>{
        updateTask({
        ...task,
        status: e.target.checked ? 'complete' : 'incomplete',
        });
    }
    return (
    <div>
        <input type="checkbox" checked={task.status === 'complete'} onChange={handleChange}/>
    </div>
  )
}

export default CheckBox