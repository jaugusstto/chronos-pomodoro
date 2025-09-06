import styles from './Styles.module.css';
import {
  HistoryIcon,
  Hourglass,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

export function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <a className={styles.menuLink} href='#'>
          <HouseIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <SettingsIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <SunIcon />
        </a>
      </div>
    </>
  );
}
