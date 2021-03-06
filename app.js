const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.static(__dirname + '/views'));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs')


//Bodyparser
app.use(express.urlencoded({ extended: false }))




//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));