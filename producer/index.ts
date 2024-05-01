import express from 'express';
import KafkaProducer from './KafkaProducer';

const app = express();
app.use(express.json());
const port = 3000;

const kafka = new KafkaProducer();

kafka.start();

app.post('/', (req, res) => {
  const message = req.body.message;
  console.log(`Received message: ${message}`);
  kafka.sendBatch([{ message }]);
  res.send(`My to the world is ${message}`);
});

app.listen(port, () => {
  console.log(`Kafka app listening on port ${port}`);
});
