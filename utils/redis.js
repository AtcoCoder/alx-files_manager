
const { createClient } = require('redis');

class RedisClient {
    constructor() {
        createClient().then(client => {
            this.client = client;
        })
        .on('error', (err) => {
            console.error(err);
        })
        .connect()
    }

    isAlive() {
        if (this.client.connected) {
            return true;
        }
        return false;
    }

    async get(key) {
        const value = await this.client.get(key);
        return value
    }

    async set(key, value, duration) {
        await this.client.expire(key, duration, value);
    }

    async del(key) {
        await this.client.getDel(key);
    }
}

const redisClient = RedisClient;
export default redisClient;
