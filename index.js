import express from 'express';
import router from './router/routes.js'
import 'dotenv/config.js'

const app = express();

app.use('/', router); // aca defino la ruta raíz

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})

export default app;