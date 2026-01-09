const PriorityFilter = ({ selectedPriorities, searchParams, setSearchParams, togglePriority }) => {
  return (
    // <div className={styles.priorityFilters}>
        <div>
                <label><input
                      type="checkbox"
                      checked={selectedPriorities.length === 0}
                      onChange={() => {
                        const params = new URLSearchParams(searchParams);
                        params.delete("priority");
                        setSearchParams(params);
                      }}
                    />
                    All
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
   );};
export default PriorityFilter;