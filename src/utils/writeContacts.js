import { PATH_DB } from '../constants/contacts.js';
import {writeFile} from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        console.log('Data successfully written to the database.');
    } catch (err) {
        console.error('Error writing to the database:', err);
    };
};
