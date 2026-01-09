import PriorityFilter from "./PriorityFilter";
import styles from "../../styles/Filters.module.scss";
const Filters = ({ status, sort, updateFilters, selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  return (
    <div className={styles.filters}>
                <select 
                value={status} 
                onChange={(e) => updateFilters('status', e.target.value)}>
                    <option value="all">Всі</option>
                    <option value="completed">Виконані</option>
                    <option value="incomplete">Невиконані</option>
                </select>

                <PriorityFilter 
                  selectedPriorities={selectedPriorities}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  togglePriority={togglePriority}
                />

                 <select 
                value={sort} 
                onChange={(e) => updateFilters('sort', e.target.value)}>
                    <option value="deadline">за дедлайном</option>
                    <option value="added">за датою додавання</option>
                    <option value="priority">за пріоритетом</option>
                </select>   
    </div>
  );
};
export default Filters;