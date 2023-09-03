type contractName = string;

interface Details {
    address?: string;
    city?: string;
}

enum Status {
    Active = 'active',
    Inactive = 'inactive',
    Pending = 'pending',
    Complete = 'completed'
}

type contactDate = Date | number | string;

interface Contact extends Details {
    id: number;
    name: contractName;
    email: string;
    birthDate: contactDate;
    status: Status;
};

type detailsContact = Contact & Details;

let basicContact: Contact = {
    id: 1,
    name: "Tarek",
    email: "tarekmonjur@gmail.com",
    birthDate: new Date(),
    status: Status.Inactive,
};

type ContactFields = keyof Contact;

function getValue<T, U extends keyof T>(source: T, field: U) {
    return source[field];
}

getValue(basicContact, 'birthDate');
