import Recipe, { IRecipe } from "../../../models/Recipes";

export default async function handler(req, res) {
  const {
    query: { id }
  } = req;

  const data: IRecipe = await Recipe.findOne({ _id: id });
  const recipe = {
    _id: JSON.stringify(data._id),
    name: data.name,
    description: data.description
  };
  res.status(200).json(JSON.stringify(recipe));
}
