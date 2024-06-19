const express = require('express');
const app = express();
app.use(express.json())
const dotenv=require("dotenv").config()
const redis = require('ioredis');
const client = redis.createClient();
const controller=require("./controller")
const port=process.env.PORT

app.post('/addData',controller);

app.listen(port,()=>{
  console.log(`backend is running on port ${port}`);
});
