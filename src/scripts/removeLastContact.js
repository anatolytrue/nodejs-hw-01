// import { PATH_DB } from '../constants/contacts.js';
// import { readFile, writeFile } from 'fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';



export const removeLastContact = async () => {
    try {
        const existingContacts = await readContacts();
        // const data = await readFile(PATH_DB, { encoding: 'utf-8' });
        // const contacts = JSON.parse(data);
        if (existingContacts.length > 0) {
            existingContacts.pop();
        }

        await writeContacts(existingContacts);
        console.log('Successfully removed the last contact');
    } catch (error) {
        console.log("Error removed the last contact: ", error);
    }
};

removeLastContact();
