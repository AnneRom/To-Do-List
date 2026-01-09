import TaskTitle from '../components/tasks/TaskTitle'
import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "../styles/Tasks.module.scss";
import { useSearchParams } from "react-router-dom";
import Filters from '../components/filters/Filters'

const Tasks = () => {
    const [tasks, setTasks] = useState([
    // { id: 1, text: "Learn React", priority: "High", completed: false },
  ]);
    const [searchParams, setSearchParams] = useSearchParams();
    const status = searchParams.get("status") || "all";

    const priority = searchParams.get("priority");
    const selectedPriorities = priority ? priority.split(",") : [];

    const sort = searchParams.get("sort") || "deadline";
    const order = {
        High: 1,
        Medium: 2,
        Low: 3
    };

  // useEffect(() => {
  //   setTasks(prev => sortTasks(prev));
  // }, []);


  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    console.log("Loaded tasks from localStorage:", savedTasks);

    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        console.log("Parsed tasks:", JSON.parse(savedTasks));
        setTasks(parsedTasks); 
        // setTasks(sortTasks(parsedTasks));//тут не сортувати
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
        // setTasks(sortTasks(response.data));
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
    //  setTasks([...tasks, newTask]);
    // setTasks(sortTasks([...tasks, newTask]));
    setTasks(prevTasks => [...prevTasks, newTask]);
    // setTasks(prevTasks => sortTasks([...prevTasks, newTask]));
  }

  const deleteTask = (id) => {
    // setTasks(tasks.filter(task => task.id !== id));
    // setTasks(prev => sortTasks(prev.filter(task => task.id !== id)));
    setTasks(prev => prev.filter(task => task.id !== id));
  }
  const toggleTask = (id) => {
    // setTasks(tasks.map(task => 
    //   task.id === id ? { ...task, completed: !task.completed } : task
    // ));
  //   setTasks(prev => sortTasks(
  //   prev.map(task =>
  //     task.id === id ? { ...task, completed: !task.completed } : task
  //   )
  // ));
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  const filtered = tasks
  .filter(item => {
    if (status === "completed") return item.completed;
    if (status === "incomplete") return !item.completed;
    return true;
  })
  .filter(item => {
    if (selectedPriorities.length === 0) return true;
    return selectedPriorities.includes(item.priority);
  })

  const sortTasks = [...filtered].sort((a, b) => {
        if (sort === "priority") {
          return order[a.priority] - order[b.priority];
        }
        if (sort === "added") {
          return a.id - b.id;
        }

        if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
        }

        if (a.deadline && b.deadline) {
        return new Date(a.deadline) - new Date(b.deadline);
        } else if (a.deadline !== b.deadline) {
        return a.deadline ? -1 : 1;
        }

        
    });
  
  const updateFilters = (key, value) => {
     // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams); 
    
    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value); 
    
    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams); 
  }
  const togglePriority = (value) => {
    console.log(selectedPriorities);

    const updated = selectedPriorities.includes(value)
      ? selectedPriorities.filter(p => p !== value)
      : [...selectedPriorities, value];

      console.log(updated);
    
      const params = new URLSearchParams(searchParams);

      if (updated.length > 0) {
        params.set("priority", updated.join(","));
      } else {
        params.delete("priority");
      }

      setSearchParams(params);
  }

    return (
        <div className="mainContainer">

            <Filters 
              status={status}
              sort={sort}
              updateFilters={updateFilters}
              selectedPriorities={selectedPriorities}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              togglePriority={togglePriority}
            />
            <TaskForm onAdd={addTask}/>
            <TaskTitle />
            <TaskList tasks={sortTasks} onDelete={deleteTask} onToggle={toggleTask}/>
       </div>
    );

};
export default Tasks;