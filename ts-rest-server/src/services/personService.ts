// src/services/personService.ts
import { Person } from '../models/personModel';
import fs from 'fs';
// Simulamos una base de datos en memoria
import persons from '../config/bd';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Obtener todas las personas
export const getAllPersons = (): Person[] => {
    return persons;
};

// Crear una nueva persona
export const createPerson = (newPerson: Person): Person => {
    newPerson.id = persons.length + 1; // Generamos un nuevo ID
    persons.push(newPerson);
    return newPerson;
};

// Buscar una persona por ID
export const findPersonById = (id: number): Person | undefined => {
    return persons.find(person => person.id === id);
};

// Eliminar una persona por ID
export const deletePersonById = (id: number): boolean => {
    const index = persons.findIndex(person => person.id === id);
    if (index === -1) {
        return false;
    }
    persons.splice(index, 1);
    return true;
};

export const uploadPhoto = async (
    file: UploadedFile,
    folder: string = 'uploads',
    validExtensions: string[] = ['png', 'jpg', 'gif', 'jpeg']
): Promise<string> => {
    try {
        // Verificar el tipo MIME del archivo
        const fileExtension = file.mimetype.split('/').at(1); // Obtener la extensión del archivo
        if (!fileExtension) {
            throw new Error('Formato de imagen no válido');
        }

        if (!validExtensions.includes(fileExtension)) {
            throw new Error('Formato de imagen no válido');
        }


        const destination = path.resolve(__dirname, '../../public/', folder);


        if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination, { recursive: true });
        }

        const fileName = `${uuidv4()}.${fileExtension}`;
        const fullPath = path.join(destination, fileName);


        await file.mv(fullPath);
        console.log('Foto subida correctamente a la carpeta:', destination);

        return fileName;
    } catch (err) {
        console.error('Error uploading photo:', err);
        throw new Error(err instanceof Error ? err.message : 'Error al subir la foto'); // Lanzar error
    }
};

