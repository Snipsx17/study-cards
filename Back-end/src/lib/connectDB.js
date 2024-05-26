require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connection.on('connected', () =>
  console.log(`Connected to ${mongoose.connection.name}...`)
);
mongoose.connection.on('disconnected', () => console.log(`DB Disconnected...`));

mongoose.connection.on('error', (err) => {
  console.log(err);
});

mongoose.connect(process.env.DB_URI);

module.exports = mongoose.connection;
