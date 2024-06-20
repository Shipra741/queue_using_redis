# queue_using_redis

commands to start redis under docker

1. docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest (use only this comamnd when working on vscode)
2. docker ps - it returns unique id
3. docker exec -it bash
4. redis-cli ping
(use all the 4 commands when working with cli)

commands to run on vscode
npm init -y
npm i express dotenv mongoose ioredis redis
