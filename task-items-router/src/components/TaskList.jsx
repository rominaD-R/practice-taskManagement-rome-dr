import React from 'react';
import { Routes, Route, Link } from 'react-router';
import TaskDetail from './TaskDetail';
import { tasksList } from './tasksData';
import './Tasks.css'

export default function TaskList() {

  return (
    <>
        <div>
            <h2>Task List</h2>
            <ul>
                {tasksList.map((task) => <Link to={`task/${task.id}`}><li>{task.title}</li></Link>)}
            </ul>
        </div>
        <div>
        </div>
    </>
  )
}
