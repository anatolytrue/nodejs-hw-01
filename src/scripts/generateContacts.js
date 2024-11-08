import {createFakeContact} from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';


const generateContacts = async (number) => {
        try {
            const data = await readFile(PATH_DB, { encoding: 'utf-8' });
            const contacts = JSON.parse(data);

            const newContacts = Array.from({length: number}, createFakeContact);

            const updatedContacts = [...contacts, ...newContacts];

            await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
            console.log('Successfully added');
        } catch (error) {
            console.error('Error generating contacts:', error);
        }
};

generateContacts(5);
