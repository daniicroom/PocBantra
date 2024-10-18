"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonRoutes = void 0;
// src/routes/personRoutes.ts
const express_1 = require("express");
const personController_1 = require("../controllers/personController");
class PersonRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const personController = new personController_1.PersonController();
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
exports.PersonRoutes = PersonRoutes;
