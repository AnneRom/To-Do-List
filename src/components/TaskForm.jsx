import { useState } from 'react'

function TaskForm( { onAdd } ) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="New task..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add task</button>
    </form>
  );
}

export default TaskForm;