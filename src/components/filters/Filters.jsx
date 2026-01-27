import PriorityFilter from "./PriorityFilter";
import styles from "../../styles/Filters.module.scss";
import { ChevronDown } from 'lucide-react';
import FilterDropdown from "./FilterDropdown";
import { useTranslation } from 'react-i18next'

const Filters = ({ status, sort, updateFilters, selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  
  const { t } = useTranslation()

  return (
    <div className={styles.filters}>
      <FilterDropdown label={t('filters')}>
        <FilterDropdown label={t('status')} mode="inline">
        <label className={styles.option}>
          <input type="radio"
          checked={status === "all"}
          onChange={() => updateFilters('status', 'all')}
           />
          {t('all')}
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={status === "completed"}
          onChange={() => updateFilters('status', 'completed')}
           />
          {t('completed')}
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={status === "incompleted"}
          onChange={() => updateFilters('status', 'incompleted')}
           />
          {t('incomplete')}
        </label>
      </FilterDropdown>
              
      <PriorityFilter 
        selectedPriorities={selectedPriorities}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        togglePriority={togglePriority}
      />
      </FilterDropdown>
      

      <FilterDropdown label={t('sortBy')}>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "deadline"}
          onChange={() => updateFilters('sort', 'deadline')}
           />
          {t('deadline')}
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "added"}
          onChange={() => updateFilters('sort', 'added')}
           />
          {t('creationDate')}
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "priority"}
          onChange={() => updateFilters('sort', 'priority')}
           />
          {t('prioritySort')}
        </label>
      </FilterDropdown>
                   
    </div>
  );
};
export default Filters;