import styles from "../../styles/PriorityFilter.module.scss";
import FilterDropdown from "./FilterDropdown";

const PriorityFilter = ({ selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  
  return (
    <FilterDropdown label="Пріоритетність" mode="inline">
      <label className={styles.option}>
        <input
        type="checkbox"
        checked={selectedPriorities.length === 0}
        onChange={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("priority");
          setSearchParams(params);
        }}/>Всі</label>
      
      {['High', 'Medium', 'Low'].map((level) => (
        <label key={level} className={styles.option}>
          <input
            type="checkbox"
            checked={selectedPriorities.includes(level)}
            onChange={() => togglePriority(level)}
          />
          {level}
        </label>
      ))}
    </FilterDropdown>
   );};
export default PriorityFilter;