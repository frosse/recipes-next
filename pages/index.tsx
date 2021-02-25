import { getSession } from "next-auth/client";
import Recipes from "../Components/Recipes";
import DatabaseService from "../services/database";
import Recipe, { IRecipe } from "../models/Recipes";
import styles from "../styles/Home.module.css";

export default function Home({ recipes, session }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Recipes data={recipes} />
      </main>

      <footer></footer>
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
        destination: "/api/auth/signin",
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
