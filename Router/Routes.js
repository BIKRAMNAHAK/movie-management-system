const express = require('express')
const Route  = express.Router()
const routesController = require('../Controllers/movieController')
const upload = require('../ConfringFile/fileuploadConfring')

Route.get('/' , routesController.defultController)
Route.get('/contactForm',routesController.ContactController)
Route.get('/addform' ,routesController.addform) //open add movie form
Route.get('/viewdata/:id',routesController.viewPageController)
Route.get('/edit/:id',routesController.editMovieController)
Route.post('/addform',upload.single('poster') ,routesController.addmovieController) // post data on this path
Route.post('/update/:id',upload.single('poster') ,routesController.UpdateController)
Route.get('/delete/:id' , routesController.deleteController)

module.exports = Route