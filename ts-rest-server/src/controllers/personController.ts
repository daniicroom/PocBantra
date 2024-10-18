// src/controllers/personController.ts
import { Request, Response } from 'express';
import { getAllPersons, createPerson, findPersonById, deletePersonById, uploadPhoto } from '../services/personService';
import { Person } from '../models/personModel';
import { UploadedFile } from 'express-fileupload';

export class PersonController {
    constructor() { }

    // Maneja la solicitud para obtener todas las personas
    public getAllPersons = (req: Request, res: Response): void => {
        try {
            const persons = getAllPersons();
            res.status(200).json(persons);
            return;
        } catch (error) {
            res.status(500).json({ message: 'Error fetching persons', error });
            return;
        }
    };

    // Maneja la solicitud para crear una nueva persona
    public createPerson = (req: Request, res: Response): void => {
        try {
            const newPerson: Person = req.body;
            const { name, last_name } = newPerson;
            if (!name || !last_name) {
                res.status(400).json({ message: 'Name and last name are required' });
                return;
            }

            const createdPerson = createPerson(newPerson);
            res.status(201).json(createdPerson);
            return;
        } catch (error) {
            res.status(500).json({ message: 'Error creating person', error });
            return;
        }
    };

    public getPersonById = (req: Request, res: Response): void => {
        try {
            const id = +req.params.id;
            if (isNaN(id)) {
                res.status(400).json({ message: 'Invalid ID' });
                return;
            }

            const person = findPersonById(id);
            if (!person) {
                res.status(404).json({ message: `Person not found with id: ${id}` });
                return;
            }

            res.status(200).json(person);
            return;
        } catch (error) {
            res.status(500).json({ message: 'Error fetching person', error });
            return;
        }
    };

    // Maneja la solicitud para eliminar una persona por ID
    public deletePerson = (req: Request, res: Response): void => {
        try {
            const personId: number = parseInt(req.params.id);
            const deleted = deletePersonById(personId);

            if (!deleted) {
                res.status(404).json({ message: 'Person not found' });
            }

            res.status(204).send(); // No Content
        } catch (error) {
            res.status(500).json({ message: 'Error deleting person', error });
        }
    };


    public uploadPhoto = async (req: Request, res: Response) => {

        const personId: number = parseInt(req.params.id);
        const person = findPersonById(personId);
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


        const file = req.files['photo'] as UploadedFile;

        try {
            // Llama a la función que maneja la subida
            const pathPhoto: string = await uploadPhoto(file);
            person.photo_url = pathPhoto;
            res.status(200).json({ message: 'Photo uploaded successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading photo', error });
        }

    };

}
