const movieModuls = require('../Moduls/movieModuls')
const fs = require('fs')


const defultController =async (req, res) => {
    
    const viewMovieList =await movieModuls.find()
    res.render('index', {movie: viewMovieList })
    
}
const addform = (req , res)=>{
    res.render('addform')
}

const addmovieController =async (req, res) => {
    const movieData = {
        movie_title: req.body.title ,
        relese_date:req.body.date,
        genre:  req.body.genre ,
        movie_reating:  req.body.reating ,
        path: req.file.path ,
        movie_description: req.body.description  ,
    }

    const addMovie = new movieModuls(movieData)
    await addMovie.save()
    res.redirect('/')
}

const viewPageController =async (req , res)=>{
    const id = req.params.id
    
    const viewMovieDetails = await movieModuls.findById(id)
    res.render('viewPage',{viewMovieDetails})
}

const editMovieController =async( req , res)=>{
    const id = req.params.id

    const editData = await movieModuls.findById(id)
    
    res.render('editForm',{editData})
    
}
const UpdateController =async(req , res) =>{
    const id = req.params.id
    const updateData = await movieModuls.findById(id)

    if(req.file){
        fs.unlink(updateData.path , (err)=>{
            console.log("err",err);
        })
    }

    updateData.movie_title = req.body.title;
    updateData.relese_date = req.body.date;
    updateData.genre = req.body.genre;
    updateData.movie_reating = req.body.reating;
    updateData.movie_description = req.body.description

    if(req.file){
        updateData.path = req.file.path
    }
    
    const updateRec = await movieModuls.findByIdAndUpdate(id , updateData , {new : true})
    res.redirect('/')
}

const deleteController =async (req , res) =>{
    const id = req.params.id
    const deleteData = await movieModuls.findById(id)
    fs.unlink(deleteData.path , (err)=>{
        console.log("err",err);
    })
    const deleteRec = await movieModuls.findByIdAndDelete(id)
    res.redirect('/')
}

const ContactController = (req, res) => {
    res.render('contactForm')
}
module.exports = { defultController,addform, addmovieController,viewPageController , editMovieController , UpdateController, ContactController ,deleteController}