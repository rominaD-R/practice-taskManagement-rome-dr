import React from 'react';
import { Routes, Route, Link } from 'react-router';
import TaskDetail from './TaskDetail';
import { tasksList } from './tasksData';


export default function TaskList() {

  return (
    <>
        <div>
            <h2>Task List</h2>
            <ul>
                {tasksList.map((task) => <li><Link to={`task/${task.id}`}>{task.title}</Link></li>)}
            </ul>
        </div>
        <div>
        </div>
    </>
  )
}
