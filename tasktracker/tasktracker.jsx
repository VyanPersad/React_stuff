import React, { useState } from 'react';
import Title from '../components/title';
import Task from '../tasktracker/task';
import NewTask from './newTask';
import {TableStyle} from './tableStyle';

export default function Tasktracker() {
    const [newTask, setnewTask]=useState({
        date:'',
        type:'',
        completed:'',
    });
    const handleChangeDate = (e)=>{
        setnewTask({...newTask,date:e.target.value});
    };
    const handleChangeType = (e)=>{
        setnewTask({...newTask,type:e.target.value});
    };    
    let tasks = [{date:"",type:""}];
    const [taskList, setTaskList]=useState(tasks);
    const addNewTask=()=>{
        setTaskList([...taskList,{date:newTask.date,type:newTask.type}]);
    };
    const  handleCompleted = (e)=>{
        e.target.classList.toggle("competed") && e.target.parentElement.remove();
    };
    const handleDeletetask = (e)=>{
        window.confirm('Delete This');
    };
  return (
    <div>
      <Title text={"Task Tracker"}/>
      <TableStyle>
        <ul className='table-head'>
            <li>Date</li>
            <li>Task</li>
        </ul>    
        <Task date={newTask.date} 
            setDate={handleChangeDate} 
            type={newTask.type} 
            setType={handleChangeType}
            onClick={addNewTask}/>
        <ul className='table-row'>
            {taskList.map((tas, index)=>{
                return tas.date !=="" && tas.type !==""?
                (<NewTask key={index} date={tas.date} type={tas.type}
                onTaskClick={handleCompleted}
                onDelete={handleDeletetask}/>)
                :null;
            })} 
        </ul>
      </TableStyle>
    </div>
  )
}
