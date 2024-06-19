const redis = require('ioredis');
const client = redis.createClient();

async function addData(req,res){
    const {data} = req.body;
  data.forEach(async (data)=>{
    await client.lpush('queue_operations', data, (err, resp) => {
        if(err){
          console.error(err);
        }
      });
  })
  res.status(201).send({message:"data successfully added to the queue",data:data})
}

module.exports=addData