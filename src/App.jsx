// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  const tasks = [
    { id: 1, text: "Learn React", priority: "High" },
    { id: 2, text: "Build a To-Do App", priority: "Medium" },
    { id: 3, text: "Profit!", priority: "Low" },
    { id: 4, text: "Profit!" }
  ];

  return (
    <>
      <Header />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
