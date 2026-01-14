import { use, useState } from "react";
import styles from "../../styles/PriorityFilter.module.scss";
import { ChevronDown } from 'lucide-react';

const PriorityFilter = ({ selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  const [open, setOpet] = useState(false);
  return (
    <div className={styles.priorityFilters}>
      <button type="button" className={styles.btnPriority}>Пріоритетність</button>
      <ChevronDown className={styles.downIcon} />
      {open && (
        <div className={styles.dropdown}>
          <label><input
        type="checkbox"
        checked={selectedPriorities.length === 0}
        onChange={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("priority");
          setSearchParams(params);
        }}
      />All
      </label>
      <label><input type="checkbox"
      checked={selectedPriorities.includes('High')}
      onChange={() => togglePriority('High')}
        /> High</label>
      <label><input type="checkbox"
      checked={selectedPriorities.includes('Medium')}
      onChange={() => togglePriority('Medium')} 
      /> Medium</label>
      <label><input type="checkbox"
      checked={selectedPriorities.includes('Low')}
      onChange={() => togglePriority('Low')} /> Low</label>
        </div>
      )}
      
    </div>
   );};
export default PriorityFilter;