const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');


const app= express();

//importing routes
const customerRoutes = require ('./routes/customer');

//setting
app.set('port', process.env.PORT || 3000);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'));

//middlewares
module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'ingsis123',
        database:'crudnodejsmysql'
    })
};

//routes
app.use('/' , customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get ('port'), () => {
    console.log('Server on por 3000');
});

//startinf the server

