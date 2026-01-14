import { useTranslation } from 'react-i18next'
import styles from "../../styles/Tasks.module.scss";

function TaskTitle() {
  const { t } = useTranslation();

  return (
    <div className={styles.taskTitle}>
      <p>{t('title')}</p>
    </div>
  );
}

export default TaskTitle;