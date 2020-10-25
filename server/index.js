const express = require('express');
const app= express();
const cors =require("cors");
const pool =require('./db');
const { json } = require('express');



app.use(cors());

//servira para reconocer el objeto de solicitud entrante como un objeto JSON
//(middleware)
app.use(express.json());


//build routes with PostgreSQL queries
app.listen(5000,()=>{
    console.log("escuchando el puerto 5000");
});

//routes

app.get('/net/:combinaciones',async(req,res)=>{
    try{
        
        const{Product,iteration,scenathon_id,column}=JSON.parse(req.params.combinaciones).select;
    

if(column=="Import_quantity"){
    var query='SELECT "name",   "Year", "Import_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3  ORDER BY "name","Year" ASC  ';
}else{
    var query='SELECT "name", "Year", "Export_quantity" FROM nettrade WHERE "Product"=$1 AND "iteration"=$2 AND "scenathon_id"=$3  ORDER BY "name","Year" ASC ';
}
const response=await pool.query(query,[Product,iteration,scenathon_id]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/protected:combinaciones',async(req,res)=>{
    try{
        

        const{iteration,group}=JSON.parse(req.params.combinaciones).select;

        switch(group){
            case "group": 
            var query="SELECT \"Year\", SUM(\"ProtectedAreasForest\") AS \"ProtectedAreasForest\", SUM(\"ProtectedAreasOther\") AS \"ProtectedAreasOther\", SUM(\"ProtectedAreasOtherNat\") AS \"ProtectedAreasOtherNat\" FROM \"resultsScen2020\" WHERE \"iteration\"=$1 GROUP BY \"Year\" ORDER BY \"Year\"";
                break;
            case "countries":
                var query="SELECT \"Year\", SUM(\"ProtectedAreasForest\") AS \"ProtectedAreasForest\", SUM(\"ProtectedAreasOther\") AS \"ProtectedAreasOther\", SUM(\"ProtectedAreasOtherNat\") AS \"ProtectedAreasOtherNat\" FROM \"resultsScen2020\" WHERE \"iteration\"=$1 AND \"Country\" NOT LIKE '%$_%' ESCAPE '$'  GROUP BY \"Year\" ORDER BY \"Year\"";
                break;
            case "regions":
                var query="SELECT \"Year\", SUM(\"ProtectedAreasForest\") AS \"ProtectedAreasForest\", SUM(\"ProtectedAreasOther\") AS \"ProtectedAreasOther\", SUM(\"ProtectedAreasOtherNat\") AS \"ProtectedAreasOtherNat\" FROM \"resultsScen2020\" WHERE \"iteration\"=$1 AND \"Country\" LIKE '%$_%' ESCAPE '$'  GROUP BY \"Year\" ORDER BY \"Year\"";
                break;
            default: 
                var query=null;
                break;
        }
        const response=await pool.query(query,[iteration]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/target2/:combinaciones',async(req,res)=>{
    try{
    const{iteration,scenathon,group}=JSON.parse(req.params.combinaciones).select;
    switch(group){
        case "group": 
        var query='SELECT "resultsScen2020"."Year", ((SUM("resultsScen2020"."ProtectedAreasForest" + "resultsScen2020"."ProtectedAreasOtherNat" +"resultsScen2020"."ProtectedAreasOther")) / SUM("resultsScen2020"."TotalLand")) AS "Protected Land" FROM "resultsScen2020" WHERE "resultsScen2020"."iteration" = $1 and "resultsScen2020"."scenathon_id" = $2  GROUP BY "resultsScen2020"."Year" ORDER BY "resultsScen2020"."Year"';
        break;
        case "countries":
            var query='SELECT "resultsScen2020"."Year", ((SUM("resultsScen2020"."ProtectedAreasForest" + "resultsScen2020"."ProtectedAreasOtherNat" +"resultsScen2020"."ProtectedAreasOther")) / SUM("resultsScen2020"."TotalLand")) AS "Protected Land" FROM "resultsScen2020" WHERE "resultsScen2020"."iteration" = $1 and "resultsScen2020"."scenathon_id" = $2 GROUP BY "resultsScen2020"."Year" AND "Country" NOT LIKE \'%$_%\' ESCAPE \'$\' ORDER BY "resultsScen2020"."Year"';
            break;
        case "regions":
            var query='SELECT "resultsScen2020"."Year", ((SUM("resultsScen2020"."ProtectedAreasForest" + "resultsScen2020"."ProtectedAreasOtherNat" +"resultsScen2020"."ProtectedAreasOther")) / SUM("resultsScen2020"."TotalLand")) AS "Protected Land" FROM "resultsScen2020" WHERE "resultsScen2020"."iteration" = $1 and "resultsScen2020"."scenathon_id" = $2 GROUP BY "resultsScen2020"."Year" AND "Country" LIKE \'%$_%\' ESCAPE \'$\' ORDER BY "resultsScen2020"."Year"';
            break;
        default: 
            var query=null;
            break;
    }
const response=await pool.query(query,[iteration,scenathon]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/target3:combinaciones',async(req,res)=>{
    try{

    const{iteration,scenathon,group}=JSON.parse(req.params.combinaciones).select;
    switch(group){
        case "group": 
        var query='SELECT "Year", (avg("CalcBiodivLnd")) AS "Biodiversity Land" , AVG("BiodivTarget") AS "Target Biodiversyty" FROM "resultsScen2020"  WHERE "iteration" = $1 AND "scenathon_id" = $2 GROUP BY "Year" ORDER BY "Year"';
        break;
        case "countries":
            var query='SELECT "Year", (avg("CalcBiodivLnd")) AS "Biodiversity Land" , AVG("BiodivTarget") AS "Target Biodiversyty" FROM "resultsScen2020"  WHERE "iteration" = $1 AND "scenathon_id" = $2  AND "Country" NOT LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Year" ORDER BY "Year"';
            break;
        case "regions":
            var query='SELECT "Year", (avg("CalcBiodivLnd")) AS "Biodiversity Land" , AVG("BiodivTarget") AS "Target Biodiversyty" FROM "resultsScen2020"  WHERE "iteration" = $1 AND "scenathon_id" = $2 AND "Country" LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Year" ORDER BY "Year"';
            break;
        default: 
            var query=null;
            break;
    }
const response=await pool.query(query,[iteration,scenathon]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/target5:combinaciones',async(req,res)=>{
    try{
    const{iteration,scenathon,group}=JSON.parse(req.params.combinaciones).select;
    switch(group){
        case "group": 
        var query='SELECT "Country", (avg("kcal_feas")) AS Kcal_feasible, avg("kcal_mder") AS Target_MDER FROM "resultsScen2020" WHERE "iteration" = $1 AND "scenathon_id" = $2 AND "Year" = 2030 GROUP BY "Country" ORDER BY "Country";';
        break;
        case "countries":
            var query='SELECT "Country", (avg("kcal_feas")) AS Kcal_feasible, avg("kcal_mder") AS Target_MDER FROM "resultsScen2020" WHERE "iteration" = $1 AND "scenathon_id" = $2 AND "Year" = 2030 AND "Country" NOT LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Country" ORDER BY "Country";';
            break;
        case "regions":
            var query='SELECT "Country", (avg("kcal_feas")) AS Kcal_feasible, avg("kcal_mder") AS Target_MDER FROM "resultsScen2020" WHERE "iteration" = $1 AND "scenathon_id" = $2 AND "Year" = 2030 AND "Country" LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Country" ORDER BY "Country";';
            break;
        default: 
            var query=null;
            break;
    }
const response=await pool.query(query,[iteration,scenathon]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/foodenergy2:combinaciones',async(req,res)=>{
    try{
    const{iteration,year}=JSON.parse(req.params.combinaciones).select;
        var query='Select "Country",avg("prot_feas")as "Protein_feasible",avg("fat_feas") as "Fat_feasible" from "resultsScen2020" WHERE "iteration"=$1 AND "Year"=$2 GROUP BY "Country"';
        
const response=await pool.query(query,[iteration,year]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});
app.get('/foodenergy1:combinaciones',async(req,res)=>{
    try{
    const{iteration,scenathon,year}=JSON.parse(req.params.combinaciones).select;
        var query='SELECT "Country", (avg("kcal_feas")) AS Kcal_feasible, avg("kcal_mder") AS Target_MDER FROM "resultsScen2020" WHERE "iteration" = $1 AND "scenathon_id" = $2 AND "Year" = $3 GROUP BY "Country" ORDER BY "Country";';
        
const response=await pool.query(query,[iteration,scenathon,year]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});

app.get('/landcover',async(req,res)=>{
    try{
    const{iteration,scenathon,group}=JSON.parse(req.params.combinaciones).select;
    switch(group){
        case "group": 
        var query='SELECT "Year",sum("CalcPasture") as "CalcPasture",sum("CalcCropland") as "CalcCropland",sum("CalcForest") as "CalcForest",sum("CalcNewForest") as "CalcNewForest" ,sum("CalcOtherLand") as "CalcOtherLand",sum("CalcUrban") as "CalcUrban" from "resultsScen2020" WHERE "iteration"=$1 GROUP BY "Year" order by "Year"';
        break;
        case "countries":
            var query='SELECT "Year",sum("CalcPasture") as "CalcPasture",sum("CalcCropland") as "CalcCropland",sum("CalcForest") as "CalcForest",sum("CalcNewForest") as "CalcNewForest" ,sum("CalcOtherLand") as "CalcOtherLand",sum("CalcUrban") as "CalcUrban" from "resultsScen2020" WHERE "iteration"=$1 AND "Country" NOT LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Year" order by "Year"';
            break;
        case "regions":
            var query='SELECT "Year",sum("CalcPasture") as "CalcPasture",sum("CalcCropland") as "CalcCropland",sum("CalcForest") as "CalcForest",sum("CalcNewForest") as "CalcNewForest" ,sum("CalcOtherLand") as "CalcOtherLand",sum("CalcUrban") as "CalcUrban" from "resultsScen2020" WHERE "iteration"=$1 AND "Country" LIKE \'%$_%\' ESCAPE \'$\' GROUP BY "Year" order by "Year"';
            break;
        default: 
            var query=null;
            break;
    }
const response=await pool.query(query,[iteration]);

res.status(200).json(response.rows)



}catch(err){
console.error(err.message);
}
});