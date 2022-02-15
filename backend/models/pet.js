import mongo from "mongoose";

const schema = new mongo.Schema({
    name:string,
    owner:{type:mongo.Schema.ObjectId, ref:"owners"},
    race:{type:mongo.Schema.ObjectId,ref:"type_pet"},
    registerDate:{
        type:Date,
        default:Date.now
    },
    dbStatus:Boolean,
});

const pet = mongo.model("pets", schema);

export default pet;