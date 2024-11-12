// import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
// import { readFile } from 'fs/promises';



export const countContacts = async () => {
    try {
        // const data = await readFile(PATH_DB, { encoding: 'utf-8' });
        const contacts = await readContacts();
        console.log('The count of contacts is: ');
        return contacts.length;

    } catch (error) {
        console.error('Error counting contacts:', error);
        return 0;
    }


};

console.log(await countContacts());
