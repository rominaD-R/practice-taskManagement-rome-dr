import React from 'react'
import { useParams, Link } from 'react-router';
import { tasksList } from './tasksData';


export default function TaskDetail() {
    const { id } = useParams();
    let filterTask = tasksList.filter((item) => item.id == id);
    const task = filterTask[0];

    console.log(filterTask);
    console.log(task);

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>
            <Link to="/"><button>Back</button></Link>
        </div>
    )
}
