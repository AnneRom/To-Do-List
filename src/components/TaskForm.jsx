import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  text: Yup.string().min(5, "Too Short!").max(100, "Too Long!").required("Required"),
  priority: Yup.string().oneOf(["High", "Medium", "Low"]).required("Required")
});

function TaskForm( { onAdd } ) {

  const handleSubmit = (values, actions) => {
    onAdd(values.text, values.priority);
    actions.resetForm();
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ text: "", priority: "Medium" }} validationSchema={FeedbackSchema}>
        <Form>
            <Field type="text"
            name="text" 
            placeholder="New task..."/>
            
           <Field as="select" 
            name="priority">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </Field>
        <button type="submit">Add task</button>
        <br />
        <ErrorMessage name="text" component="span" style={{ color: "red", fontSize: "0.8rem" }}/>
        </Form>
    </Formik>
    
  );
}

export default TaskForm;