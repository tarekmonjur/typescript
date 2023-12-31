# TypeScript

## Basic TypeScript Usages:

- **Primitive and Build-in Type**
- **Custome type with interface**
- **Define types using type aliases**
- **Defining enumerable types**
- **Typing function**
- **Define meta type using generics**

## Complex Types:

- **Multiple type with Union type**
- **Keyof operator**
- **Typeof operator**
- **Index access type**
- **Limited types with record**

## Metadata from existing types:

- **Extending and modifying existing types**
- **Extracting metadata from existing types**

## Adding dynamic behavior with decorator:

- **Create Method Decorator**
- **Create Factory Decorator**
- **Create Class Decorator**
- **Create Property Decorator**

<br />

## Basic TypeScript Usages:

### Primitive and Build-in Types:

```
let a: number;
let b: string;
let c: boolean;
let x: Date;
let y: string[];
let z: any;

y = "Tarek!" as any;
```

### Creating custom type by interface:

**Define interface type:**

```
interface Address {
    address: string;
    city?: string;
    zip: number;
}

interface Contact extends Address{
    id: number;
    name: string;
    email: string;
    birthDate?: Date; // its optional
};
```

**Use of inteface type:**

```
let contact: Contact = {
    id: 1,
    name: "Tarek",
    email: "tarekmonjur@gmail.com",
    address: "dhaka",
    zip: 1212,
};
```

### Define types using type aliases

Define Type

```
type contactName = string;
```

Use type aliases

```
interface Contact {
    id: number;
    name: contactName;
    email: string;
    birthDate?: Date; // its optional
};
```

### Defining enumerable types

Define enum type

```
enum contactStatus {
    Active = 'active',
    Inactive = 'inactive'
}
```

Use enum type

```
interface Contact {
    id: number;
    name: string;
    status: contactStatus
};

let contact: Contact = {
    id: 1,
    name: "Tarek",
    status: contactStatus.Active
};
```

### Typing function

```
interface Contact {
    id: number;
    name: string;
}

function clone(data: Contact): Contact {
    return Object.assign({}, data);
}

const user: Contact = { id: 13, name: "tarek" };
const newUser = clone(user);
```

### Define meta type using generics

Generics Typing

```
interface Contact {
    id: number;
    name: string;
}

interface UserContact {
    id: number;
    name: string;
    username: string;
}

function clone<T1, T2 extends T1>(data: T1): T2 {
    return Object.assign({}, data);
}

const user: Contact = { id: 13, name: "tarek" };
const newUser = clone<Contact, UserContact>(user);

const dateRange = { start: new Date(), end: new Date() };
const newUser = clone(user);
```

<br />

## Complex Types:

### Multiple type with Union type

```
type birthDate = Date | number | string;
type contactStatus = 'active' | 'inactive';

interface Contact {
    id: number;
    name: string;
    birthDate: birthDate;
    status: contactStatus
};
```

### Keyof operator

Dynamic Typing

```
interface Contact {
    id: number;
    name: string;
    email: string;
};

type contactFields = keyof Contact;

let basicContact: Contact = {
    id: 1,
    name: "Tarek",
    email: "tarekmonjur@gmail.com",
};

function getValue<T, F extends keyof Contact>(source: T, field: F) {
    return source[field];
}

getValue(basicContact, 'name');
```

### Typeof operator

```
const myType = { min: 4, max: 7 };
function save(source: typeof myType) {}
```

### Index access type

```
interface Contact {
    id: number;
    name: string;
    email: string;
};

interface contactEvent {
    contactId: Contact['id']
}
```

### Limited types with record

#### Defining dynamic but limited type with record

Basic Example

```
const server: Record<string, string | number | Record<string, string> | Function> = {};
server.address = 'localhost';
server.port = 80;
server.left = {};
server.right = {}
server.handle = () => console.log('live');
```

Advance usecase example

```
type UserStatus = 'active' | 'inactive' | 'new';
interface User {
    id: number;
    name: string;
    status?: UserStatus
}
interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

type userQuery = <Record<keyof User, Query>;

function searchContacts(users: User[], query: userQuery) {
    return users.filter(user => {
        for (const property of Object.keys(user) as (keyof User)[]) {
            const queryProperty = query[property];
            if (queryProperty && queryProperty.matches(user[property])) {
                return true;
            } else {
                return false;
            }
        }
    });
}

const users: User[] = [];
searchContacts(users, {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === 'tarek' },
    status: { matches: (status) => status === 'tarek' }
});
```

<br />

## Metadata from existing types:

### Extending and modifying existing types

`Partial` && `Omit` utility type helper

```
type userQuery = Omit<
    Partial<
        Record<keyof User, Query>
    >,
    'status'
    >;
```

`Partial` && `Pick` utility type helper

```
type userQuery =
    Partial<
        Pick<
            Record<keyof User, Query>,
            'id' | 'name'
        >
    >;
```

`Required` utility type

```
type userRequiredQuery = Required<userQuery>
```

### Extracting metadata from existing types

`Mapped` type

```
interface Query <T>{
    sort?: 'asc' | 'desc';
    matches(val: T): boolean;
}
```

```
type userQueryMap = {
    [Tprop in keyof User]?: Query<User[Tprop]>
}
```

<br />

## Adding dynamic behavior with decorator

### Here is the all decrorators:

[Decorator Examples](https://github.com/tarekmonjur/typescript/tree/master/src/decorator)

# React - NextJs: TypeScript

[Project Examples](https://github.com/tarekmonjur/typescript/tree/master/nextjs)
