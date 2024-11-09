import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'fs/promises';


export const removeAllContacts = async () => {
    try {
        await writeFile(PATH_DB, JSON.stringify([]));
        console.log('Successfully removing all contacts');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }

};

removeAllContacts();
