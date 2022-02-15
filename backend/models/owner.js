import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"]
  },
  registerDate: {type: Date, default: Date.now},
  dbStatus: {type: Boolean, default: true},
});

const owner = mongoose.model("owners", ownerSchema);
export default owner;
