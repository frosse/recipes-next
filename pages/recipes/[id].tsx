import React from "react";
import DatabaseService from "../../services/database";
import { getSession } from "next-auth/client";
import Recipe, { IRecipe } from "../../models/Recipes";

const Page = ({ recipe }) => {
  return (
    <div className="container">
      <h1>{recipe.name}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
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

  const data: IRecipe = await Recipe.findOne({ _id: context.params.id });
  const recipe = {
    _id: JSON.stringify(data._id),
    name: data.name,
    description: data.description
  };
  return {
    props: { recipe }
  };
}

export default Page;
