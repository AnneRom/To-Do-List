import PriorityFilter from "./PriorityFilter";
import styles from "../../styles/Filters.module.scss";
import { ChevronDown } from 'lucide-react';
import FilterDropdown from "./FilterDropdown";

const Filters = ({ status, sort, updateFilters, selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  return (
    <div className={styles.filters}>
      <FilterDropdown label="Фільтри">
        <FilterDropdown label="Статус" mode="inline">
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
      </FilterDropdown>
      

      <FilterDropdown label="Сортувати за">
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "deadline"}
          onChange={() => updateFilters('sort', 'deadline')}
           />
          Дедлайном
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "added"}
          onChange={() => updateFilters('sort', 'added')}
           />
          Датою додавання
        </label>
        <label className={styles.option}>
          <input type="radio"
          checked={sort === "priority"}
          onChange={() => updateFilters('sort', 'priority')}
           />
          Пріоритетом
        </label>
      </FilterDropdown>
                   
    </div>
  );
};
export default Filters;