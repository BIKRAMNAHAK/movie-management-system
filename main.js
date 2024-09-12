const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv');
env.config();
const PORT = process.env.PORT || 3000;
const myPath = path.join(__dirname, '/Views');
const routers = require('./Router/Routes')
const db = require('./ConfringFile/mongoDbConfing')
const bodyParser = require('body-parser')
const multer = require('./ConfringFile/fileuploadConfring')


app.set('view engine', 'ejs');
app.set('views', myPath);


app.use(express.static(myPath));
app.use('/uplodeFile', express.static(path.join(__dirname, 'uplodeFile')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/',routers)

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
  } else {
    console.error('Error starting server:', err);
  }
});
