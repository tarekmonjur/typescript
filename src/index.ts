// class Person {
//     name;
//     email;
// }

type ContactStatus  = 'Active' | 'Inactive';


interface Person {
    id: number;
    name: string;
    status: ContactStatus;
}

// function clone (source: Person): Person {
//     return Object.apply({}, source);
// }

interface UserContact {
    id: number;
    name: string;
    status: ContactStatus;
    username: string;
}

function clone<T1, T2 extends T1>(source: T1): T1 {
    return Object.apply({}, source);
}

const contact1: Person = {id: 1, name: "tarek", status: 'Active' };
const contact2 = clone<Person, UserContact>(contact1);

const dateRange = { start: new Date(), end: new Date() };
const dateRange2 = clone(dateRange);