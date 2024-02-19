import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Load tasks from local storage
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        } else {
            // Default tasks if none are found in local storage
            setTasks(['To read my book by 8PM', 'To do the dishes']);
        }
    }, []);

    useEffect(() => {
        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            const updatedTasks = [...tasks, newTask.trim()];
            setTasks(updatedTasks);
            console.log('Tasks after addition:', updatedTasks);
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        console.log('Tasks after deletion:', updatedTasks);
    };

    const [newTask, setNewTask] = useState('');

    return (
        <div className="App">
            <h1>Amatip IT Todo-List App (TaskMaster)</h1>
            <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
