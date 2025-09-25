// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    // { id: 1, text: "Learn React", priority: "High", completed: false },
  ]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log("Loaded tasks from localStorage:", savedTasks);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
      console.log("Parsed tasks:", JSON.parse(savedTasks));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Saved tasks to localStorage:", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority = "Medium", deadline = null) => {
     const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false,
      deadline
     };
     setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  const order = {
    High: 1,
    Medium: 2,
    Low: 3
  };
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; 
    }

    if (a.deadline && b.deadline) {
      return new Date(a.deadline) - new Date(b.deadline);
    } else if (a.deadline !== b.deadline) {
      return a.deadline ? -1 : 1; 
    } 

    return order[a.priority] - order[b.priority];
  });


  return (
    <>
      <Header />
      <TaskForm onAdd={addTask}/>
      <TaskList tasks={sortedTasks} onDelete={deleteTask} onToggle={toggleTask}/>
    </>
  )
}

export default App
