import Head from 'next/head'
import Recipes from '../Components/Recipes';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome</h1>
        <Recipes />
       
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
