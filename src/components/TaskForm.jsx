import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  text: Yup.string().min(5, "Too Short!").max(100, "Too Long!").required("Required"),
  priority: Yup.string().oneOf(["High", "Medium", "Low"]).required("Required"),
  deadline: Yup.date().nullable().min(new Date().toISOString().split("T")[0], "Deadline can't be in the past")
});

function TaskForm( { onAdd } ) {

  const handleSubmit = (values, actions) => {
    onAdd(values.text, values.priority, values.deadline || null);
    actions.resetForm();
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ text: "", priority: "Medium", deadline: ""}} validationSchema={FeedbackSchema}>
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
           <Field type="date" name="deadline" />
        <button type="submit">Add task</button>
        <br />
        <ErrorMessage name="text" component="span" style={{ color: "red", fontSize: "0.8rem" }}/>
        <ErrorMessage name="deadline" component="span" style={{ color: "red", fontSize: "0.8rem" }}/>
        </Form>
    </Formik>
    
  );
}

export default TaskForm;