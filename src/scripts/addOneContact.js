import { createFakeContact } from "../utils/createFakeContact.js";
// import { PATH_DB } from "../constants/contacts.js";
// import { readFile, writeFile } from "fs/promises";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        existingContacts.push(newContact);

        await writeContacts(existingContacts);
        console.log("Successfully added one contact");
    } catch (error) {
        console.log("Error adding one contact: ", error);
    }
};

addOneContact();


