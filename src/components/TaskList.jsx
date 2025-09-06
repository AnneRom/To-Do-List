import TaskItem from "./TaskItem";

function TaskList( {tasks} ) {
  return (
    <ul>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task.text} priority={task.priority}/>
        ))}

        
    </ul>
  );
}

export default TaskList;