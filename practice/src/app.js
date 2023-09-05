/**
 * 
 * @param {number} id 
 * @returns 
 */

async function getContact(id) {
    return {
        id: 1,
        name: 'test',
        birthDate: new Date(),
    };
}

// getContact("1").then(contact => {
//     contact.id = "232";
//     contact.birthDate = "1/1/99"
// });

getContact(1).then(contact => {
    contact.id = 232;
    contact.birthDate = new Date()
});