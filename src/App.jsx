// import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const [tasks, setTasks] = useState([
    // { id: 1, text: "Learn React", priority: "High", completed: false },
  ]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log("Loaded tasks from localStorage:", savedTasks);

    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        console.log("Parsed tasks:", JSON.parse(savedTasks));
        setTasks(parsedTasks); 
        return
      } catch (e) {
        console.error("Failed to parse tasks from localStorage:", e);
        localStorage.removeItem("tasks"); 
      }
    } else {
      async function fetchTasks() {
      try {
        const response = await axios.get(
        "https://my-json-server.typicode.com/AnneRom/TO-DO-LIST-API/tasks"
        );
        setTasks(response.data);
      } catch (e) {
        console.error("Error fetching tasks:", e);
      }
    }

    fetchTasks();
    }

  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      console.log("Saved tasks to localStorage:", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
      console.log("Removed tasks from localStorage");
    }
    
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
      <LanguageSelector />
      <div className="mainContainer">
      <Header />
      <TaskForm onAdd={addTask}/>
      <TaskList tasks={sortedTasks} onDelete={deleteTask} onToggle={toggleTask}/>
       </div>
    </>
  )
}

export default App
