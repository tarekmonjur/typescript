import { Metadata } from 'next';
import styles from './page.module.css';
import Message from './common/message';


export const metadata: Metadata = {
  title: 'Home Page',
}

function BasicTypes() {
  let firstName: string = 'Tarek';
  let firstNumber: number = 9;
  let firstBoolean: boolean = true;
  let firstArray: number[] = [3, 5, 9, 2];
  let firstArray2: Array<string> = ['a', 'b', 'c'];
  enum myEnum {first=1, second=2};
  let firstEnum: myEnum = myEnum.first;
  const warning = (): void => {
    console.log('warning');
  }

  return (
    <div style={{ padding: '15px' }}>
      <p className={styles.pCode}>
        <code className={styles.code}>
        The value '{firstName}' is of '{typeof firstName}' type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value '{firstNumber}' is of '{typeof firstNumber}' type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value '{firstBoolean}' is of '{typeof firstBoolean}' type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value '{firstArray}' is of '{typeof firstArray}' type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value '{firstArray2}' is of '{typeof firstArray2}' type!
        </code>
      </p>
      <p className={styles.pCode}>
        <code className={styles.code}>
          The value '{firstEnum}' is of '{typeof firstEnum}' type!
        </code>
      </p>
    </div>
  );
}

export default function Home() {
  

  return (
      <div>
        <h1>Home Page</h1>
        <Message title="TSC" message="TypeScript is cool" />
        <BasicTypes></BasicTypes>
        <Message />
      </div>
  )
}
