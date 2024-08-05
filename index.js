import express from 'express';
import router from './router/routes.js'
import 'dotenv/config.js'
import fs from 'fs';
import moment from 'moment-timezone';

const app = express();

app.use('/', router); // aca defino la ruta raíz

moment.tz.setDefault("America/Buenos_Aires");

const logStream = fs.createWriteStream(`${process.env.LOG_FILENAME}`, { encoding: 'utf8', flags: 'a' });

// Custom log function to append newline
function customLog(...messages) {
  const stamp = moment().format('YYYY-MM-DD:HH:mm:ss');
  const formattedMessage = messages.map(message => 
    typeof message === 'object' ? JSON.stringify(message) : message
  ).join(' ');
  logStream.write(`${stamp} - ${formattedMessage}\n`);
}

// Redirect the console.log output to the logStream.
console.log = customLog;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})

export default app;