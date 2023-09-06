import { Metadata } from 'next';
import styles from './page.module.css';


export const metadata: Metadata = {
  title: 'Home Page',
}

export default function Home() {
  return (
      <div>
        <h1>Home Page</h1>
      </div>
  )
}
