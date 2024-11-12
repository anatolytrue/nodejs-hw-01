
import { PATH_DB } from '../constants/contacts.js';
import {readFile} from 'fs/promises';


export const readContacts = async () => {
    try {
        const data = await readFile(PATH_DB,{ encoding: 'utf8'});
        const contacts = JSON.parse(data);
        // console.log('File contents:', data);
        return contacts;
    } catch (err) {
        console.error('File reading error:', err);
        return [];
    }
};


