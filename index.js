const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 2525;
const dbRetryTime = process.env.db_retry_time || 2000;
const mongoUri = "mongodb://localhost:27017/myvinyl";

let db = mongoose.connection;

let connectWithRetry= function() {
  return mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,/*
    auth: { authSource: "admin" },
    user: "root",
    pass: "example"*/
  });
};

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectWithRetry();

db.on('error', () => {
	setTimeout(() => {
		console.error('Fallo en la conexión a la BBD. Se reintenta.');
		connectWithRetry();
      }, dbRetryTime);
});

db.on('connected', () => {
  app.use('/api', router);
  let server = app.listen(port, () => console.log(`Todo OK. Servidor escuchando en ${port}!`));
  //process.on('uncaughtException', ()=>{server.close()});
});
