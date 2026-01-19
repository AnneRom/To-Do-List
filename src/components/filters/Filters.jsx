import PriorityFilter from "./PriorityFilter";
import styles from "../../styles/Filters.module.scss";
import { ChevronDown } from 'lucide-react';
import FilterDropdown from "./FilterDropdown";

const Filters = ({ status, sort, updateFilters, selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  return (
    <div className={styles.filters}>
      <FilterDropdown label="Статус">
        <label className={styles.option}>
          <input type="radio"
          checked={status === "all"}
          onChange={() => updateFilters('status', 'all')}
           />
          Всі
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={status === "completed"}
          onChange={() => updateFilters('status', 'completed')}
           />
          Виконані
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={status === "incompleted"}
          onChange={() => updateFilters('status', 'incompleted')}
           />
          Невиконані
        </label>
      </FilterDropdown>
              
      <PriorityFilter 
        selectedPriorities={selectedPriorities}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        togglePriority={togglePriority}
      />

      <FilterDropdown label="Сортувати за">
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "deadline"}
          onChange={() => updateFilters('sort', 'deadline')}
           />
          За дедлайном
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "added"}
          onChange={() => updateFilters('sort', 'added')}
           />
          За датою додавання
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "priority"}
          onChange={() => updateFilters('sort', 'priority')}
           />
          За пріоритетом
        </label>
      </FilterDropdown>
                   
    </div>
  );
};
export default Filters;