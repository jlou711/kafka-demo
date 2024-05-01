import KafkaConsumer from './KafkaConsumer';

async function connectToKafka() {
  const kafka = new KafkaConsumer();
  await kafka.startConsumer();
}
connectToKafka();
