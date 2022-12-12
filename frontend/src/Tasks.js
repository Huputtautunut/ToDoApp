import React from 'react';
import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import './Tasks.css';


const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch(`http://localhost:5000/api/v1/tasks`)
            const data = await response.json();
            console.log(data);
            setTasks(data);
        }
        try {
            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    }, []);
   
    return (



        <div class="api-data">

            <div className="taskheader">To(o much) To Do</div>

            <ul className="tasks-list">
                {tasks.map(task => <TaskItem
                    key={task.id}
                    id={task.id}
                    name={task.name}
                />)}
            </ul>
        </div>

    )
};

export default Tasks;

