import mongo from "mongoose";

const typePetSchema = new mongo.Schema({
    race:String,
    description:String,
    registerDate: {type: Date, default: Date.now},
    dbStatus: Boolean,
});

const typePet = mongo.model("typePet", typePetSchema);

export default typePet;