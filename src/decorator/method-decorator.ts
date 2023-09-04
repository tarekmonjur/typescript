interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.includes(role);
    }
}

function authorize(target: any, property: string, descriptor: PropertyDescriptor) {
    const wrapped = descriptor.value

    console.log({target}, {property}, {descriptor});

    descriptor.value = function () {
        if (!currentUser.isAuthenticated()) {
            throw Error("User is not authenticated");
        }

        try {
            console.log({arguments});
            return wrapped.apply(this, arguments);
        } catch (ex) {
            // TODO: some fancy logging logic here
            throw ex;
        }
    }
}

class ContactRepository {
    private contacts: Contact[] = [];

    @authorize
    getContactById(id: number): Contact | null {
        if (!currentUser.isInRole("ContactViewer")) {
            throw Error("User not authorized to execute this action");
        }

        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}

const contactRepo = new ContactRepository();
contactRepo.getContactById(12);