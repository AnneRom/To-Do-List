import { ChevronDown } from 'lucide-react';
import styles from "../../styles/FilterDropdown.module.scss";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { createContext, useContext } from "react";

export const DropdownContext = createContext(null);

export const useDropdownParent = () => useContext(DropdownContext);

const FilterDropdown = ({ label, children, mode = "default" }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const parent = useDropdownParent();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && mode === "default") {
                setOpen(false);
            }
            // if (ref.current && !ref.current.contains(event.target) && mode === "inline") {
            //     setOpen(false);
            // }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    useEffect(() => {
    if (parent?.isOpen === false) {
      setOpen(false);
    }
  }, [parent?.isOpen]);

    return (
        <DropdownContext.Provider value={{ isOpen: open }}>
        <div ref={ref} className={styles.dropdownWrapper}>
            <button
                type="button"
                className={clsx(styles.dropdownButton, open && styles.active, mode === "inline" && styles.inlineBtn)}
                onClick={() => setOpen(!open)}
            >
                <span>{label}</span>
                <ChevronDown className={clsx(styles.icon, open && styles.iconOpen)} />
            </button>
            <div className={clsx(styles.dropdown, open && styles.open, mode === "inline" && open && styles.inline)}>
                {children}
            </div>
        </div>
        </DropdownContext.Provider>
    );

};

export default FilterDropdown;