import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';


export const removeLastContact = async () => {
    try {
        const data = await readFile(PATH_DB, { encoding: 'utf-8' });
        const contacts = JSON.parse(data);
        if (contacts.length > 0) {
            contacts.pop();
        }

        await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log('Successfully removed the last contact');
    } catch (error) {
        console.log("Error removed the last contact: ", error);
    }
};

removeLastContact();
