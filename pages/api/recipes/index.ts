import DatabaseService from '../../../services/database';
import Recipe, { IRecipe } from '../../../models/Recipes';

export default async (req, res) => {
  if (req.method === 'GET') {

    DatabaseService.connect();

    const data = await Recipe.find();

    res.status(200).json(JSON.stringify(data));
  }

  if (req.method === 'POST') {
    DatabaseService.connect();

    const { name, desc } = req.body;
    const recipe: IRecipe = new Recipe({ "name": name, "description": desc });
    try {
      await recipe.save();

    } catch (error) {
      console.log(error);
      res.status(500).json(JSON.stringify(error));
    }
    const newRecipe = await Recipe.findOne({name: name});
    console.log(newRecipe);
    await res.status(200).json(newRecipe);
  }
}