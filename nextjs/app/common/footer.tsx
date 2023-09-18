import styles from './../page.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.grid}>
      <Link href="/about" className={styles.card}>
        <h2>
          About <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </Link>

      <Link href="/contact" className={styles.card}>
        <h2>
          Contact <span>-&gt;</span>
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </Link>

      <Link href="/login" className={styles.card}>
        <h2>
          Login <span>-&gt;</span>
        </h2>
        <p>Explore the Next.js 13 playground.</p>
      </Link>

      <Link href="/card" className={styles.card}>
        <h2>
          Card <span>-&gt;</span>
        </h2>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </Link>
    </div>
  );
}
