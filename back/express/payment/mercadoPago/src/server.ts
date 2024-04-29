import "dotenv/config";
import express, { json, urlencoded } from "express";
import cors from 'cors';

import { corsOptions } from "./configuration/cors";
import mainRouter from "./routes";

const app = express();

// Middlewares
app.use(cors(corsOptions))
app.use(json({ limit: "50mb" }))
app.use(urlencoded({ extended: true }))

// Rutas
// import userRoutes from './routes/users'; // Importa tus rutas de usuario
app.use('/api/v1', mainRouter); // Monta las rutas de usuario en /users

// Inicia el servidor
app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.APP_PORT}`);
});