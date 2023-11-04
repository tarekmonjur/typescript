/* react/no-unescaped-entities */
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';
import styles from './page.module.css';
import Message from './common/message';

export const metadata: Metadata = {
  title: 'Home Page',
};

function BasicTypes() {
  let firstName: string = 'Tarek';
  let firstNumber: number = 9;
  let firstBoolean: boolean = true;
  let firstArray: number[] = [3, 5, 9, 2];
  let firstArray2: Array<string> = ['a', 'b', 'c'];
  enum myEnum {
    first = 1,
    second = 2,
  }
  let firstEnum: myEnum = myEnum.first;
  const warning = (): void => {
    console.log('warning');
  };

  return (
    <div style={{ padding: '15px' }}>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstName}&apos; is of &apos;{typeof firstName}
          &apos; type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstNumber}&apos; is of &apos;{typeof firstNumber}
          &apos; type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstBoolean}&apos; is of &apos;
          {typeof firstBoolean}
          &apos; type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstArray}&apos; is of &apos;{typeof firstArray}
          &apos; type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstArray2}&apos; is of &apos;{typeof firstArray2}
          &apos; type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value &apos;{firstEnum}&apos; is of &apos;{typeof firstEnum}
          &apos; type!
        </code>
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Suspense fallback={<Loading />}>
        <Message title="TSC" message="TypeScript is cool" />
        <BasicTypes></BasicTypes>
        <Message />
      </Suspense>
    </div>
  );
}
