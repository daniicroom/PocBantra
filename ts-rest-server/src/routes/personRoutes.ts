// src/routes/personRoutes.ts
import { Router } from 'express';
import { PersonController } from '../controllers/personController';

export class PersonRoutes {
    static get routes(): Router {
        const router = Router();
        const personController = new PersonController();

        // Ruta para obtener todas las personas
        router.get('/', personController.getAllPersons);

        // Ruta para crear una nueva persona
        router.post('/', personController.createPerson);

        // Ruta para obtener una persona por ID
        router.get('/:id', personController.getPersonById);

        // Ruta para eliminar una persona por ID
        router.delete('/:id', personController.deletePerson);

        router.post('/photo/:id', personController.uploadPhoto);
        return router;
    }
}
