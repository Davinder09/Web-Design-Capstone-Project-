const mongoose = require('mongoose');
 
// connection string for my database
let dbURI = 'mongodb+srv://davindersingh3474:mongo@cluster0.bychp.mongodb.net/HMS_DB?retryWrites=true&w=majority';

 
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
 
mongoose.connect(dbURI, {dbName: 'HMS_DB'}); 
 
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
 
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
 
// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./users');
require('./service_request');
require('./employee');