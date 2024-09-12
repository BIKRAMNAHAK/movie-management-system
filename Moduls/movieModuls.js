const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    movie_title : {
        type : String,
       
    },
    relese_date : {
        type : String,
       
    },
    genre : {
        type : String,
       
    },
    movie_reating : {
        type : Number,
       
    },
    path:{
        type : String
    },
    movie_description : {
        type : String
    }

})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

