import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import styles from './LanguageSelector.module.css';
import clsx from 'clsx';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ua', label: 'UA' },
  ];

  const currentLang = i18n.language;

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleChangeLanguage = (code) => {
    if (code === currentLang) {
      setOpen(false);
    } else {
      i18n.changeLanguage(code);
      setOpen(false);
    }
    
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <div ref={dropdownRef} className={styles.langSelector}>
      <button onClick={toggleDropdown} className={clsx(open && styles.active)}>
        {currentLang.toUpperCase()}
        <ChevronDown size={16} className={clsx(styles.downIcon, open && styles.activeIcon)}/>
      </button>

        <ul className={clsx(styles.dropdown, open && styles.open)}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleChangeLanguage(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default LanguageSelector;