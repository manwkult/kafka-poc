import { Kafka } from "kafkajs";

const data = require("../data.json");

const kafka = new Kafka({
  clientId: "users-app",
  brokers: ["kafka:9092"],
  requestTimeout: 30000,
  connectionTimeout: 5000,
  authenticationTimeout: 5000,
  retry: {
    initialRetryTime: 500,
    maxRetryTime: 10000,
    retries: 2,
  }
});

const producer = kafka.producer();

const sendPayload = async (input: any) => {
  try {
    await producer.send({
      topic: "test",
      messages: [{ key: input._id, value: JSON.stringify(input) }],
    });
  } catch (e) {
    console.error("Caught Error while sending:", e);
  }
}

const main = async () => {
  await producer.connect();
  
	data.forEach(async (item: any) => {
		await sendPayload(item);
	});
}

main();