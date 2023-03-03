import Redis from "ioredis";

let connection: any;

async function createConnection() {

  try {
    const client = new Redis({
      host: "0.0.0.0",
      port: 36379,
      autoResendUnfulfilledCommands: false,
      retryStrategy() {
        return 2000;
      }
    });

    client.on("connect", (redis_connection) => {
      console.log("连接成功!");
      connection = redis_connection;
    });

  } catch (error) {
    throw error;
  };
}; createConnection();