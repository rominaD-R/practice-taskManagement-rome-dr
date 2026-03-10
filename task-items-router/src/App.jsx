import { useState } from 'react'
import { Routes, Route } from 'react-router';
import TaskList from './components/TaskList';
import './App.css'
import TaskDetail from './components/TaskDetail';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/' element={<TaskList />} />
       <Route path="task/:id" element={<TaskDetail />} />
     </Routes>

    </>
  )
}

export default App
