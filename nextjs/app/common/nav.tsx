import Image from 'next/image';
import styles from './../page.module.css';
import Link from 'next/link';

export default function Nav () {
    return (
      <div className={styles.description}>
        <p>
            <code className={styles.code}>
            <Link href="/">TypeScript Project</Link>
            </code>
        </p>
        <div>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            By{' '}
            <Image
                src="/fn-logo.png"
                alt="FN Logo"
                className={styles.vercelLogo}
                width={100}
                height={100}
                priority
            />
            </a>
        </div>
      </div>
    )
}