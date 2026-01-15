import { ChevronDown } from 'lucide-react';
import styles from "../../styles/FilterDropdown.module.scss";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

const FilterDropdown = ({ label, children }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div ref={ref} className={styles.dropdownWrapper}>
            <button
                type="button"
                className={clsx(styles.dropdownButton, open && styles.active)}
                onClick={() => setOpen(!open)}
            >
                <span>{label}</span>
                <ChevronDown className={clsx(styles.icon, open && styles.iconOpen)} />
            </button>
            <div className={clsx(styles.dropdown, open && styles.open)}>
                {children}
            </div>
        </div>
    );

};

export default FilterDropdown;