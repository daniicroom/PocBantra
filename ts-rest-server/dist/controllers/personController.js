"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const personService_1 = require("../services/personService");
class PersonController {
    constructor() {
        // Maneja la solicitud para obtener todas las personas
        this.getAllPersons = (req, res) => {
            try {
                const persons = (0, personService_1.getAllPersons)();
                res.status(200).json(persons);
                return;
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching persons', error });
                return;
            }
        };
        // Maneja la solicitud para crear una nueva persona
        this.createPerson = (req, res) => {
            try {
                const newPerson = req.body;
                const { name, last_name } = newPerson;
                if (!name || !last_name) {
                    res.status(400).json({ message: 'Name and last name are required' });
                    return;
                }
                const createdPerson = (0, personService_1.createPerson)(newPerson);
                res.status(201).json(createdPerson);
                return;
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating person', error });
                return;
            }
        };
        this.getPersonById = (req, res) => {
            try {
                const id = +req.params.id;
                if (isNaN(id)) {
                    res.status(400).json({ message: 'Invalid ID' });
                    return;
                }
                const person = (0, personService_1.findPersonById)(id);
                if (!person) {
                    res.status(404).json({ message: `Person not found with id: ${id}` });
                    return;
                }
                res.status(200).json(person);
                return;
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching person', error });
                return;
            }
        };
        // Maneja la solicitud para eliminar una persona por ID
        this.deletePerson = (req, res) => {
            try {
                const personId = parseInt(req.params.id);
                const deleted = (0, personService_1.deletePersonById)(personId);
                if (!deleted) {
                    res.status(404).json({ message: 'Person not found' });
                }
                res.status(204).send(); // No Content
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting person', error });
            }
        };
        this.uploadPhoto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const personId = parseInt(req.params.id);
            const person = (0, personService_1.findPersonById)(personId);
            if (!person) {
                res.status(404).json({ message: `Person not found with id: ${personId}` });
                return;
            }
            if (!req.files || Object.keys(req.files).length === 0) {
                res.status(400).json({ message: 'No files were uploaded' });
                return;
            }
            if (!Object.keys(req.files).includes('photo')) {
                res.status(400).json({ message: "'photo' file is required" });
                return;
            }
            const file = req.files['photo'];
            try {
                // Llama a la función que maneja la subida
                const pathPhoto = yield (0, personService_1.uploadPhoto)(file);
                person.photo_url = pathPhoto;
                res.status(200).json({ message: 'Photo uploaded successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error uploading photo', error });
            }
        });
    }
}
exports.PersonController = PersonController;
