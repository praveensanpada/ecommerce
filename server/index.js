const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const morgan=require('morgan')
const mongoose=require('mongoose');
const cors=require('cors');
require("dotenv").config();
//const authJwt= require('./helpers/jwt');
//const errorHandler=require('./helpers/error-handler');

app.use(cors());
app.options('*',cors());
// app.use(authJwt());
// app.use(errorHandler);
//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');



//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));




app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);



app.post('/pnc/:id1', (req,res)=>{
	const id = req.params.id1
	console.log("--------------------------------")
	console.log(id)
})

//Database
mongoose.connect('mongodb+srv://shop-user:1234567Nn@cluster0.j4kol.mongodb.net/eshop-database?retryWrites=true&w=majority',{
       useNewUrlParser:true,
       useUnifiedTopology: true,
       dbName: 'eshop-database'
})
.then(()=>{
    console.log('Connection is ready...')
})
.catch((err)=>{
    console.log(err);
})
app.listen(3001, ()=>{

    console.log("running at 3001")
})