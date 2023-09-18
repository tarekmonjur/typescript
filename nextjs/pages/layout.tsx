import Image from 'next/image';
import styles from './index.module.css';
import Logo from './../public/fn-logo.png';

export default ({ children }: any) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Image
          src={Logo}
          alt="logo"
          className={styles.logo}
          width={0}
          height={0}
        />
      </header>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};
