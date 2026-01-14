import clsx from "clsx";
import TaskItem from "./TaskItem";
import { useTranslation } from 'react-i18next';
import styles from "../../styles/Tasks.module.scss";

function TaskList( {tasks, onDelete , onToggle} ) {
  const { t } = useTranslation()
  return (
    <ul className={clsx(styles.taskList, tasks.length >= 10 ? styles.manyTasks : styles.fewTasks)}>

        {/* аналог if */}
        {tasks.length === 0 && <p className={styles.notify}>{t('manyTasks')}</p>}

        {tasks.map((task) => ( 
            <TaskItem 
            key={task.id} //1
            task={task} 
            onDelete={() => onDelete(task.id)}
            onToggle={() => onToggle(task.id)}

            />
        ))}  

        {tasks.length >= 10 && <p className={styles.notify}>{t('fewTasks')}</p>}
    </ul>
  );
}

export default TaskList;