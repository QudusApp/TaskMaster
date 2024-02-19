import React, {useState, useEffect} from "react";
import './App.css';

function App(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('')

    useEffect(() => {
        setTask(['To read my book by 8PM', 'To do the dishes']);
    }, []);


    const handleAddTask = () => {
        if(newTask) {
            setTask([...task, newTask]);
            setNewTask('');
        }
    }

    const handleDeleTask = (index) => {
        const copyTask = task.slice();
        copyTask.splice(index, 1);
        setTask(copyTask);
    }

    return(
        <div className="App">
            <h1>Amatip IT Todo-List App</h1>
            <input 
            type="text" 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add</button>
            
            <ul>
                {task.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={handleDeleTask}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}

export default App;