const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const { loadPlanetsData } = require('./models/planets.model');
const PORT = process.env.PORT || 8000;
const MONGO_URL =
  'mongodb+srv://Testing-Learn:03gHyb6m1b8TVUEd@cluster0.rbdkzap.mongodb.net/isro?retryWrites=true&w=majority';
const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDb is Ready');
});
mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewURlPArser: true,
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
