import clsx from "clsx";
import TaskItem from "./TaskItem";

function TaskList( {tasks, onDelete
    // , onToggle
} ) {
  return (
    <ul className={clsx("task-list", tasks.length >= 10 ? "many-tasks" : "few-tasks")}>

        {/* аналог if */}
        {tasks.length === 0 && <p>No tasks available</p>}

        {tasks.map((task) => ( 
            <TaskItem 
            key={task.id} //1
            task={task.priority === "High" ? `!!! ${task.text}` : task.text} //аналог if-else
            priority={task.priority}
            onDelete={() => onDelete(task.id)}
            // onToggle={() => onToggle(task.id)}
            />
        ))}  

        {tasks.length >= 10 && <p>You have a lot of tasks!</p>}
    </ul>
  );
}

export default TaskList;