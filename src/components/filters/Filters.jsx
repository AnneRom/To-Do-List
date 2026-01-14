import PriorityFilter from "./PriorityFilter";
import styles from "../../styles/Filters.module.scss";
import { ChevronDown } from 'lucide-react';

const Filters = ({ status, sort, updateFilters, selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.selectWrapper}>
          <select 
          className={styles.select}
          value={status} 
          onChange={(e) => updateFilters('status', e.target.value)}>
              <option value="all">Всі</option>
              <option value="completed">Виконані</option>
              <option value="incomplete">Невиконані</option>
          </select>
          <ChevronDown className={styles.downIcon} />
      </div>
              
      <PriorityFilter 
        selectedPriorities={selectedPriorities}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        togglePriority={togglePriority}
      />
      <div className={styles.selectWrapper}>
          <select 
          className={styles.select}  
          value={sort} 
          onChange={(e) => updateFilters('sort', e.target.value)}>
              <option value="deadline">За дедлайном</option>
              <option value="added">За датою додавання</option>
              <option value="priority">За пріоритетом</option>
          </select>
          <ChevronDown className={styles.downIcon} />
      </div>
                   
    </div>
  );
};
export default Filters;