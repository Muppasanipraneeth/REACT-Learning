const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port =3000;
mongoose.connect()
app.listen(port,()=>{
    console.log(`this port is listening ${port}`);
})