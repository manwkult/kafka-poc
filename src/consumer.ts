import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "users-app",
  brokers: ["kafka:9092"],
});

const consumer = kafka.consumer({ groupId: "tests-group" });
const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("Received: ", {
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);