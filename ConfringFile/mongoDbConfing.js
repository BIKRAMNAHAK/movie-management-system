const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://bikramnahak9714:c2qKnlmErYZ0BR2q@cluster0.9n2j2.mongodb.net/Movies-management-system')
  .then(() => console.log('DataBase is Connected successFully...'))
  .catch((err) => {
    console.log('error', err);
  });

module.exports = mongoose;
