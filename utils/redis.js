
const { createClient } = require('redis');

class RedisClient {
    constructor() {
        this.client = createClient();
        this.client.on('error', (err) => {
            console.error(err);
        });
    }

    isAlive() {
        if 
        return false;
    }
}