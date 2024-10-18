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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPhoto = exports.deletePersonById = exports.findPersonById = exports.createPerson = exports.getAllPersons = void 0;
const fs_1 = __importDefault(require("fs"));
// Simulamos una base de datos en memoria
const bd_1 = __importDefault(require("../config/bd"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
// Obtener todas las personas
const getAllPersons = () => {
    return bd_1.default;
};
exports.getAllPersons = getAllPersons;
// Crear una nueva persona
const createPerson = (newPerson) => {
    newPerson.id = bd_1.default.length + 1; // Generamos un nuevo ID
    bd_1.default.push(newPerson);
    return newPerson;
};
exports.createPerson = createPerson;
// Buscar una persona por ID
const findPersonById = (id) => {
    return bd_1.default.find(person => person.id === id);
};
exports.findPersonById = findPersonById;
// Eliminar una persona por ID
const deletePersonById = (id) => {
    const index = bd_1.default.findIndex(person => person.id === id);
    if (index === -1) {
        return false;
    }
    bd_1.default.splice(index, 1);
    return true;
};
exports.deletePersonById = deletePersonById;
const uploadPhoto = (file_1, ...args_1) => __awaiter(void 0, [file_1, ...args_1], void 0, function* (file, folder = 'uploads', validExtensions = ['png', 'jpg', 'gif', 'jpeg']) {
    try {
        // Verificar el tipo MIME del archivo
        const fileExtension = file.mimetype.split('/').at(1); // Obtener la extensión del archivo
        if (!fileExtension) {
            throw new Error('Formato de imagen no válido');
        }
        if (!validExtensions.includes(fileExtension)) {
            throw new Error('Formato de imagen no válido');
        }
        const destination = path_1.default.resolve(__dirname, '../../public/', folder);
        if (!fs_1.default.existsSync(destination)) {
            fs_1.default.mkdirSync(destination, { recursive: true });
        }
        const fileName = `${(0, uuid_1.v4)()}.${fileExtension}`;
        const fullPath = path_1.default.join(destination, fileName);
        yield file.mv(fullPath);
        console.log('Foto subida correctamente a la carpeta:', destination);
        return fileName;
    }
    catch (err) {
        console.error('Error uploading photo:', err);
        throw new Error(err instanceof Error ? err.message : 'Error al subir la foto'); // Lanzar error
    }
});
exports.uploadPhoto = uploadPhoto;
