import DatabaseService from '../../services/database';
import Recipe, {IRecipe} from '../../models/Recipes';

export default async (req, res) => {
  if (req.method === 'GET') {

    DatabaseService.connect();

    const data = await Recipe.find();

    res.status(200).json(JSON.stringify(data));
  }

  if (req.method === 'POST') {
    DatabaseService.connect();

    console.log(req.body);
    const {name, desc} = req.body;
    const recipe: IRecipe = new Recipe({"name": name, "description": desc });
    recipe.save();
    res.status(200).json("OK")
  }
}