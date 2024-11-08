import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
import { readFile, writeFile } from "fs/promises";


export const addOneContact = async () => {
    try {
        const data = await readFile(PATH_DB,{ encoding: 'utf-8' });
        const contacts = JSON.parse(data);
        const newContact = createFakeContact();
        contacts.push(newContact);

        await writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        console.log("Successfully added one contact");
    } catch (error) {
        console.log("Error adding one contact: ", error);
    }
};

addOneContact();


