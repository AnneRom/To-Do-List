// import clsx from "clsx";

// function TaskItem( { task, priority = "Medium", onDelete, completed, onToggle } ) {
//   return (
//     <li className={clsx(
//         "task-item",
//         priority === "High" && "high-priority",
//         priority === "Medium" && "medium-priority",
//         priority === "Low" && "low-priority",
//         completed && "completed"
//       )}>
//         <input type="checkbox" checked={completed} onChange={onToggle}/>
//         {task}
//         <button onClick={onDelete}>Delete</button>
//     </li>
//   );
// }

// export default TaskItem;


import clsx from "clsx";

function TaskItem( { task, priority = "Medium", onDelete } ) {
  return (
    <li className={clsx(
        "task-item",
        priority === "High" && "high-priority",
        priority === "Medium" && "medium-priority",
        priority === "Low" && "low-priority",
        // completed && "completed"
      )}>
        {/* <input type="checkbox" checked={completed} onChange={onToggle}/> */}
        {task}
        <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;