import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1>{t('title')}</h1>
    </header>
  );
}

export default Header;