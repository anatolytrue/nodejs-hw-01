import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = 'Це дані, які ми записуємо у базу.';
    try {
        await fs.writeFile(PATH_DB, data, 'utf8');
        console.log('Дані успішно записані у базу.');
    } catch (err) {
        console.error('Помилка запису у базу:', err);
    };
};
