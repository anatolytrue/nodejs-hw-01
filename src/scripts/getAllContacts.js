
// import { PATH_DB } from '../constants/contacts.js';
// import { readFile } from 'fs/promises';
import { readContacts } from '../utils/readContacts.js';




export const getAllContacts = async () => {
    try {
        const existingContacts = await readContacts();
        return existingContacts;
    } catch (error) {
        console.error('Error getting contacts:', error);
        return [];
    }

};


console.log(await getAllContacts());
