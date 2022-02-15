import mongo from "mongoose";

const schema = new mongo.schema({
    race:String,
    description:String,
});

const typePet = mongo.model("type_pet", schema);

export default typePet;