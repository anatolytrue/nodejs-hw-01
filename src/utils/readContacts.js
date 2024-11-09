
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';


export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('File reading error:', err);
    }
};


