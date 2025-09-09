import { useState } from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  text: Yup.string().min(5, "Too Short!").max(100, "Too Long!").required("Required"),
  priority: Yup.string().oneOf(["High", "Medium", "Low"]).required("Required")
});

function TaskForm( { onAdd } ) {
  const [text, setText] = useState("")
  const [priority, setPriority] = useState("Medium")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text, priority);
    setText("");
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ text: "", priority: "Medium" }} validationSchema={FeedbackSchema}>
        <Form>
            <Field type="text"
            name="text" 
            placeholder="New task..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <Field as="select" 
        name="priority" 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </Field>
        <button type="submit">Add task</button>
        </Form>
    </Formik>
    
  );
}

export default TaskForm;