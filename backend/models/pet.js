import mongo from "mongoose";

const schema = new mongo.Schema({
    name:string,
    owner:{type:mongo.Schema.ObjectId, ref:"owner"},
    race:{type:mongo.Schema.ObjectId,ref:"type_pet"},
});

const pet = mongo.model("pet", schema);

export default pet;