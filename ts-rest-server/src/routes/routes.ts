// src/routes/personRoutes.ts

import { Router } from 'express';
import { PersonRoutes } from './personRoutes';

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        // Rutas para las personas
        router.use('/api/persons', PersonRoutes.routes);



        return router;
    }
}
