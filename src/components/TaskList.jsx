import TaskItem from "./TaskItem";

function TaskList( {tasks} ) {
  return (
    <ul>
        {/* аналог if */}
        {tasks.length === 0 && <p>No tasks available</p>}

        {tasks.map((task) => ( 
            <TaskItem 
            key={task.id} 
            task={task.priority === "High" ? `!!! ${task.text}` : task.text} //аналог if-else
            priority={task.priority}/>
        ))}  

        {tasks.length >= 10 && <p>You have a lot of tasks!</p>}
    </ul>
  );
}

export default TaskList;