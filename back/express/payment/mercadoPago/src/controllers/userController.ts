import { Request, Response } from 'express';

// Obtener todos los usuarios
export const getUsers = (req: Request, res: Response) => {
  res.send('Obteniendo usuarios');
};

// Crear un nuevo usuario
export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  res.send(`Usuario ${name} creado`);
};