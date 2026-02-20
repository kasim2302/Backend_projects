import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
   
    moviename:{type: String , required:true,trim: true},
    description:{type:String},
    producer:{type: String},
    director:{type:String},
    cast:[{ type: String }],
    genre: {type: String},
    language: { type: String},
    realeaseDate:{ type:Date},
    status:{
       type:String,
       enum:["Active","Inactive"],
       default: "Active"
    },
    createdBy:{
        type: String,
        default:"Admin"
    },
    updatedBy:{
        type: String
    },



},{timestamps:true}
)

const movieData = mongoose.model("moviedata",movieSchema)

export default movieData