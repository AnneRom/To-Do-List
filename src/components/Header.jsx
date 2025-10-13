import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <p>{t('title')}</p>
    </header>
  );
}

export default Header;