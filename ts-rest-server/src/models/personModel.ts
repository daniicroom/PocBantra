// src/models/personModel.ts

export interface Person {
    id: number;               // Identificador único
    name: string;            // Nombre
    last_name: string;       // Apellido
    age?: number;            // Edad (opcional)
    gender?: string;         // Género (opcional)
    email?: string;          // Correo electrónico (opcional)
    phone?: string;
    photo_url?: string;         // Teléfono (opcional)
    address?: {
        street: string;      // Calle
        city: string;        // Ciudad
        state: string;       // Estado
        zip: string;         // Código postal
    };
}
