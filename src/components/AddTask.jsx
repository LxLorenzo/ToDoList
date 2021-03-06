import React, { useState } from 'react';

import Button from './Button';

import './AddTask.css';


const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange}
                value={inputData} 
                className="add-task-input" 
                type="text"
                placeholder="Type a Task"
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Add Task</Button>
                
            </div>
        </div>
     );
}
 
export default AddTask;