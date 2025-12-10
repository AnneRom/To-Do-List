import { useTranslation } from 'react-i18next'

function TaskTitle() {
  const { t } = useTranslation();

  return (
    <div className="task-title">
      <p>{t('title')}</p>
    </div>
  );
}

export default TaskTitle;