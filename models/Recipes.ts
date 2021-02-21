import mongoose, { Schema } from "mongoose";

export interface IRecipe extends mongoose.Document {
  name: string;
  description: string;
}

export const RecipeSchema = new Schema({
  name: String,
  description: String
});

const Recipe =
  mongoose.models.Recipe || mongoose.model<IRecipe>("Recipe", RecipeSchema);

export default Recipe;
