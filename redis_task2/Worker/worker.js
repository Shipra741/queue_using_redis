const redis = require('ioredis');
const client = redis.createClient();

function processData(data) {
    setTimeout(() => {
    console.log(`data ${data} processed`);
    }, 3000);
}
async function processQueue() {
    const data=await client.lrange('queue_data', 0, -1)
    console.log(data)
    data.map(async()=>{
       await  client.lpop('queue_data', (err, queue_data) => {
            if (err) {
                console.error(err);
                return;
            }
            if (queue_data) {
                processData(data);
            } else {
                console.log('No data found in the queue');
            }
        });
    })
    
}
processQueue();
