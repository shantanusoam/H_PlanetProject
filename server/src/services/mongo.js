const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://PROJECTS-LEARNING_ISRO:ISRO7860@isro.dv4qbcq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('MongoDb is Ready');
});
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewURlPArser: true,
  });
}

module.exports = {
  mongoConnect,
};
// PROJECTS-LEARNING_ISRO
// ISRO7860
