import clsx from "clsx";

function TaskItem( { task, onDelete, onToggle } ) {
    const deadlineDate = task.deadline ? new Date(task.deadline) : null;
    const formattedDeadline = deadlineDate ? deadlineDate.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    }) : null;

    const now = new Date();
    const isOverdue = deadlineDate && !task.completed && deadlineDate < now;
  
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
        {formattedDeadline && <div className={clsx(
            "deadline",
            isOverdue && "overdue"
         )}>{formattedDeadline}</div>}
        <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
