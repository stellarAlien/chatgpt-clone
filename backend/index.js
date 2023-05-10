require('dotenv').config();
const Fastify = require('fastify');
const cors = require('fastify-cors');
const Bull = require('bull');

const app = Fastify();
const port = process.env.PORT || 4000;

const messageQueue = new Bull('message-queue');

require('./message-processor');

app.register(cors);
app.register(require('fastify-formbody'));

app.post('/message', async (req, res) => {
  const { message } = req.body;

  const job = await messageQueue.add({
    message: message
  });

  // Wait for the response from the message-processor
  const response = await job.finished();

  res.code(200).send({
    message: response
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
