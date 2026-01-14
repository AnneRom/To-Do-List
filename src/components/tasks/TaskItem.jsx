import clsx from "clsx";
import { MdDelete } from "react-icons/md";
import styles from "../../styles/Tasks.module.scss";

function TaskItem( { task, onDelete, onToggle } ) {
    const deadlineDate = task.deadline ? new Date(task.deadline) : null;
    const formattedDeadline = deadlineDate ? deadlineDate.toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit", // or "long" for full month name
        year: "2-digit", // or "numeric" for full year
        hour: "2-digit",
        minute: "2-digit"
    }) : null;

    const now = new Date();
    const isOverdue = deadlineDate && !task.completed && deadlineDate < now;
  
    return (
    <li className={clsx(styles.taskItem, 
            task.priority === "High" && styles.highPriority,
            task.priority === "Medium" && styles.mediumPriority,
            task.priority === "Low" && styles.lowPriority)}>
        <input type="checkbox" checked={task.completed} onChange={onToggle}/>
         {/* аналог if-else */}
         <p className={clsx(
            task.completed && styles.completed
         )}>
            {task.text}
         </p>
        {formattedDeadline && <div className={clsx(
            styles.deadline,
            isOverdue && styles.overdue
         )}>{formattedDeadline}</div>}
        <button className={styles.deleteBtn} onClick={onDelete}><MdDelete className={styles.deleteIcon}/></button>
    </li>
  );
}

export default TaskItem;
