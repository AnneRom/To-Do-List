// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", priority: "High" },
    { id: 2, text: "Build a To-Do App", priority: "Medium" },
    { id: 3, text: "Profit!", priority: "Low" },
    { id: 4, text: "Profit!" },
    { id: 5, text: "Learn React", priority: "High" },
    { id: 6, text: "Build a To-Do App", priority: "Medium" },
    { id: 7, text: "Profit!", priority: "Low" },
    { id: 8, text: "Profit!" },
    // { id: 9, text: "Learn React", priority: "High" },
    // { id: 10, text: "Build a To-Do App", priority: "Medium" },
    // { id: 11, text: "Profit!", priority: "Low" },
    // { id: 12, text: "Profit!" }
  ]);

  const addTask = (text, priority = "Medium") => {
     const newTask = {
      id: Date.now(),
      text,
      priority
     };
     setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Header />
      <TaskForm onAdd={addTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
