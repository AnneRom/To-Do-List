// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", priority: "High", completed: false },
    { id: 2, text: "Build a To-Do App", priority: "Medium", completed: true },
    { id: 3, text: "Profit!", priority: "Low", completed: false },
    { id: 4, text: "Profit!",  priority: "Low", completed: false },
    { id: 5, text: "Learn React", priority: "High", completed: false },
    { id: 6, text: "Build a To-Do App", priority: "Medium", completed: false },
    { id: 7, text: "Profit!", priority: "Low", completed: false },
    { id: 8, text: "Profit!",  priority: "Low", completed: false },
    // { id: 9, text: "Learn React", priority: "High" },
    // { id: 10, text: "Build a To-Do App", priority: "Medium" },
    // { id: 11, text: "Profit!", priority: "Low" },
    // { id: 12, text: "Profit!" }
  ]);

  const names = ["Anna", "ben", "Charlie", "andriy", "David", "Bob"];

  const sorted = [...names].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  console.log(sorted)
  
  // const nums = [100, -3, 25, 0, -45, 8, 23, -1];//за спаданням від більшого до меншого

  // const users = [
  //   { id: 1, name: "Anna", age: 25 },
  //   { id: 2, name: "Ben", age: 17 },
  //   { id: 3, name: "Charlie", age: 40 },
  //   { id: 4, name: "Andriy", age: 16 },
  //   { id: 5, name: "David", age: 30 }] //за зростанням від меншого до більшого (спочатку молодщі потим старші)


const users = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Ben", age: 17 },
  { id: 3, name: "Charlie", age: 40 },
  { id: 4, name: "Andriy", age: 16 },
  { id: 5, name: "David", age: 30 }] //за зростанням від меншого до більшого (спочатку молодщі потим старші)
  
  const sorted1 = [...users].sort((a, b) => a.age - b.age);
  console.log(sorted1)

  const sorted2 = [...users].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
  console.log(sorted2)

  
  const addTask = (text, priority = "Medium") => {
     const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false
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
