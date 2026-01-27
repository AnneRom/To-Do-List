import styles from "../../styles/PriorityFilter.module.scss";
import FilterDropdown from "./FilterDropdown";
import { useTranslation } from 'react-i18next'

const PriorityFilter = ({ selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  
  const { t } = useTranslation()

  return (
    <FilterDropdown label={t('priority')} mode="inline">
      <label className={styles.option}>
        <input
        type="checkbox"
        checked={selectedPriorities.length === 0}
        onChange={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("priority");
          setSearchParams(params);
        }}/> {t('all')}</label>
      
      {['High', 'Medium', 'Low'].map((level) => (
        <label key={level} className={styles.option}>
          <input
            type="checkbox"
            checked={selectedPriorities.includes(level)}
            onChange={() => togglePriority(level)}
          />
          {t(`priority${level}`)}
        </label>
      ))}
    </FilterDropdown>
   );};
export default PriorityFilter;