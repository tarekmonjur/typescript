import styles from './index.module.css';

export default ({ children }: any) => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src="./fn-logo.png"
                    alt="logo"
                    className={styles.logo}
                  />
            </header>
            <div className={styles.grid}>
                {children}
            </div>
        </div>
    );
}