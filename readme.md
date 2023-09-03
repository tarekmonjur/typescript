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
    name: contactName;
    email: string;
    birthDate?: Date; // its optional
    status: contactStatus
};

let contact: Contact = {
    id: 1,
    name: "Tarek",
    email: "tarekmonjur@gmail.com",
    status: contactStatus.Active
};
```
