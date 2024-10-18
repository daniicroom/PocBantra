"use strict";
// src/routes/personRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const personRoutes_1 = require("./personRoutes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // Rutas para las personas
        router.use('/api/persons', personRoutes_1.PersonRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
