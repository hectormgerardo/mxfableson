const{Router}=require('express');
const router = Router();


const{getSustainableImporter}=require ('./db');

router.get('/net',getSustainableImporter);

module.exports=router;