// src/data/personsData.ts

import { Person } from '../models/personModel';

// Simulamos una base de datos en memoria
const persons: Person[] = [
    {
        id: 1,
        name: "Emily",
        last_name: "Watson",
        age: 28,
        gender: "female",
        email: "emily.watson@example.com",
        phone: "+1-555-4321",
        photo_url: "http://",
        address: {
            street: "123 Elm Street",
            city: "New York",
            state: "NY",
            zip: "10001"
        }
    },
    {
        id: 2,
        name: "Michael",
        last_name: "Johnson",
        age: 34,
        gender: "male",
        email: "michael.johnson@example.com",
        phone: "+1-555-9876",
        photo_url: "http://",
        address: {
            street: "456 Oak Avenue",
            city: "San Francisco",
            state: "CA",
            zip: "94102"
        }
    },
    {
        id: 3,
        name: "Sophia",
        last_name: "Martinez",
        age: 25,
        gender: "female",
        email: "sophia.martinez@example.com",
        phone: "+1-555-1234",
        photo_url: "http://",
        address: {
            street: "789 Pine Road",
            city: "Austin",
            state: "TX",
            zip: "73301"
        }
    },
    {
        id: 4,
        name: "Carlos",
        last_name: "Gonzalez",
        age: 40,
        gender: "male",
        email: "carlos.gonzalez@example.com",
        phone: "+1-555-6789",
        photo_url: "http://",
        address: {
            street: "101 Maple Lane",
            city: "Chicago",
            state: "IL",
            zip: "60601"
        }
    },
    {
        id: 5,
        name: "Alicia",
        last_name: "Ramirez",
        age: 22,
        gender: "female",
        email: "alicia.ramirez@example.com",
        phone: "+1-555-5432",
        photo_url: "http://",
        address: {
            street: "202 Birch Street",
            city: "Miami",
            state: "FL",
            zip: "33101"
        }
    },
    {
        id: 6,
        name: "David",
        last_name: "Lee",
        age: 29,
        gender: "male",
        email: "david.lee@example.com",
        phone: "+1-555-9999",
        photo_url: "http://",
        address: {
            street: "303 Cedar Avenue",
            city: "Seattle",
            state: "WA",
            zip: "98101"
        }
    },
    {
        id: 7,
        name: "Olivia",
        last_name: "Brown",
        age: 31,
        gender: "female",
        email: "olivia.brown@example.com",
        phone: "+1-555-5555",
        photo_url: "http://",
        address: {
            street: "404 Birch Boulevard",
            city: "Portland",
            state: "OR",
            zip: "97201"
        }
    },
    {
        id: 8,
        name: "Daniel",
        last_name: "Garcia",
        age: 38,
        gender: "male",
        email: "daniel.garcia@example.com",
        phone: "+1-555-3333",
        photo_url: "http://",
        address: {
            street: "505 Willow Way",
            city: "Denver",
            state: "CO",
            zip: "80201"
        }
    },
    {
        id: 9,
        name: "Isabella",
        last_name: "Davis",
        age: 27,
        gender: "female",
        email: "isabella.davis@example.com",
        phone: "+1-555-8888",
        photo_url: "http://",
        address: {
            street: "606 Spruce Lane",
            city: "Boston",
            state: "MA",
            zip: "02101"
        }
    },
    {
        id: 10,
        name: "James",
        last_name: "Miller",
        age: 45,
        gender: "male",
        email: "james.miller@example.com",
        phone: "+1-555-2222",
        photo_url: "http://",
        address: {
            street: "707 Ash Drive",
            city: "Philadelphia",
            state: "PA",
            zip: "19101"
        }
    }
];

export default persons;
