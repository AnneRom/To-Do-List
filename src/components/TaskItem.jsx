import clsx from "clsx";

function TaskItem( { task, onDelete, onToggle } ) {
  return (
    <li className="task-item">
        <input type="checkbox" checked={task.completed} onChange={onToggle}/>
         {/* аналог if-else */}
         <span className={clsx(
            task.completed && "completed",
            task.priority === "High" && "high-priority",
            task.priority === "Medium" && "medium-priority",
            task.priority === "Low" && "low-priority"
         )}>
            {task.text}
         </span>
        <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
