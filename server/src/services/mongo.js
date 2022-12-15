const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://Testing-Learn:03gHyb6m1b8TVUEd@cluster0.rbdkzap.mongodb.net/isro?retryWrites=true&w=majority';

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
