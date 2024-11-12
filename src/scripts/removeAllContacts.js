// import { PATH_DB } from '../constants/contacts.js';
// import { writeFile } from 'fs/promises';
import { writeContacts } from '../utils/writeContacts.js';


export const removeAllContacts = async () => {
    try {
        await writeContacts([]);
        // await writeFile(PATH_DB, JSON.stringify([]));
        console.log('Successfully removing all contacts');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }

};

removeAllContacts();
