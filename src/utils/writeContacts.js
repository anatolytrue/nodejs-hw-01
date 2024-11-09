import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = 'This is the data we write to the database.';
    try {
        await fs.writeFile(PATH_DB, data, 'utf8');
        console.log('Data successfully written to the database.');
    } catch (err) {
        console.error('Error writing to the database:', err);
    };
};
