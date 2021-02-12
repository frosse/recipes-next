import DatabaseService from '../../services/database';
import Recipe, { IRecipe } from '../../models/Recipes';

export default async (req, res) => {
  if (req.method === 'GET') {

    DatabaseService.connect();

    const data = await Recipe.find();

    res.status(200).json(JSON.stringify(data));
  }

  if (req.method === 'POST') {
    DatabaseService.connect();

    console.log(req.body);
    const { name, desc } = req.body;
    const recipe: IRecipe = new Recipe({ "name": name, "description": desc });
    try {
      await recipe.save();

    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
    res.status(200).json("OK")
  }
}