// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'

function App() {
  const tasks = [
    { id: 1, text: "Learn React", priority: "High" },
    { id: 2, text: "Build a To-Do App", priority: "Medium" },
    { id: 3, text: "Profit!", priority: "Low" },
    { id: 4, text: "Profit!" },
    { id: 5, text: "Learn React", priority: "High" },
    { id: 6, text: "Build a To-Do App", priority: "Medium" },
    { id: 7, text: "Profit!", priority: "Low" },
    { id: 8, text: "Profit!" },
    { id: 9, text: "Learn React", priority: "High" },
    { id: 10, text: "Build a To-Do App", priority: "Medium" },
    { id: 11, text: "Profit!", priority: "Low" },
    { id: 12, text: "Profit!" }
  ];

  return (
    <>
      <Header />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
