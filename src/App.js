import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="App">
            <h2>AMATIP IT TODO-LIST APP</h2>
            <div>
                <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
