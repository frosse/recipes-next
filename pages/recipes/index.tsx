import Head from "next/head";
import Link from "next/link";
import { getSession } from "next-auth/client";
import Recipes from "../../Components/Recipes";
import DatabaseService from "../../services/database";
import Recipe, { IRecipe } from "../../models/Recipes";
import styles from "../../styles/Home.module.css";

export default function Home({ recipes, session }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/recipes/newrecipe">
          <button>New recipe</button>
        </Link>
        <h3>Hi there {session.user.name}</h3>
        <Recipes data={recipes} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user's session based on the request
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  DatabaseService.connect();

  const data: IRecipe[] = await Recipe.find();
  const recipes = data.map(recipe => {
    return {
      _id: recipe._id.toString(),
      name: recipe.name,
      description: recipe.description
    };
  });
  return {
    props: { recipes, session }
  };
}
