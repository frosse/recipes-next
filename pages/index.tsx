import Head from 'next/head'
import Recipes from '../Components/Recipes';
import DatabaseService from '../services/database';
import Recipe, { IRecipe } from '../models/Recipes';
import styles from '../styles/Home.module.css'

export default function Home({recipes}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome</h1>
        <Recipes data={recipes}/>
       
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
   DatabaseService.connect();

    const data: IRecipe[] = await Recipe.find();
    const recipes = data.map((recipe)=> {
      return {
        _id: JSON.stringify(recipe._id),
        name: recipe.name,
        description: recipe.description
      }
    })
  return {
    props: {recipes}
  }
}
