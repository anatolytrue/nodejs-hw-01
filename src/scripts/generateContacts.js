import createFakeContact from '../utils/createFakeContact';
import { PATH_DB } from '../constants/contacts.js';
import { readFile, writeFile } from 'fs/promises';

const generateContacts = async (number) => {
        try {
            const data = await readFile(PATH_DB);
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
