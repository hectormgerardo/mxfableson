const express = require('express');
const app= express();
const cors =require("cors");
const pool =require('./db');



app.use(cors());

//servira para reconocer el objeto de solicitud entrante como un objeto JSON
//(middleware)
app.use(express.json());


//build routes with PostgreSQL queries
app.listen(5000,()=>{
    console.log("escuchando el puerto 5000");
});

//routes

app.get('/net',async(req,res)=>{
    try {
        const response = await pool.query('SELECT "name", "iteration","scenathon_id", "Product", "Year", "Export_quantity","Import_quantity" FROM nettrade WHERE name= $1',['USA']);
    res.status(200).json(response.rows);
    } catch (err){
        console.error(err.message);
    }
});




