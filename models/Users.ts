import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
}

export const UserSchema = new Schema({
  username: String,
  password: String
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
