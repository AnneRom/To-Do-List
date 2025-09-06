function TaskItem( { task, priority = "Medium" } ) {
  return (
    <li>
        {task} - <strong>{priority}</strong>
        <button>Delete</button>
    </li>
  );
}

export default TaskItem;