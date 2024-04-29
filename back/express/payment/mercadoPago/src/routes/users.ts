import express from 'express';
const router = express.Router();

// Controladores de usuario
import { getUsers, createUser } from '../controllers/userController';

// Rutas
router.get('/', getUsers);
router.post('/', createUser);

export default router;