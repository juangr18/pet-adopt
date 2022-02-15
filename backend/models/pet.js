import mongo from "mongoose";

const schema = new mongo.Schema({
    name:string,
    ,
    race:{type:mongo.Schema.ObjectId,ref:"type_pet"},
});