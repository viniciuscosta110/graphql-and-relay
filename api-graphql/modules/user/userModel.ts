import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  birth_date: String,
  mother_name: String,
  phone: String,
  email: String,
  cpf: String
});

const UserModel = mongoose.models["User"] || mongoose.model('User', UserSchema);

export default UserModel;
