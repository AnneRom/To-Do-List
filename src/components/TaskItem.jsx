import clsx from "clsx";

function TaskItem( { task, priority = "Medium" } ) {
  return (
    <li className={clsx(
        "task-item",
        priority === "High" && "high-priority",
        priority === "Medium" && "medium-priority",
        priority === "Low" && "low-priority"
      )}>
        {task}
        <button>Delete</button>
    </li>
  );
}

export default TaskItem;