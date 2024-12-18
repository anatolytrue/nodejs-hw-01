import {createFakeContact} from '../utils/createFakeContact.js';
// import { PATH_DB } from '../constants/contacts.js';
// import { readFile, writeFile } from 'fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
        try {
            const existingContacts = await readContacts();
            const newContacts = Array.from({length: number}, createFakeContact);

            const updatedContacts = [...existingContacts, ...newContacts];

            await writeContacts(updatedContacts);
            console.log('Contacts successfully generated');
        } catch (error) {
            console.error('Error generating contacts:', error);
        }
};

generateContacts(5);
