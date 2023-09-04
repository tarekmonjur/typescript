const server: Record<string, string | number | Record<string, string> | Function> = {};
server.address = 'localhost';
server.port = 80
server.left = {};
server.right = {}
server.handle = () => console.log('live');

type UserStatus = 'active' | 'inactive' | 'new';

interface User {
    id: number;
    name: string;
    status?: UserStatus
}

interface Query <T>{
    sort?: 'asc' | 'desc';
    matches(val: T): boolean;
}

// type userQuery = Omit<
//     Partial<Record<keyof User, Query>>,
//     'status'
//     >;

// type userQuery = 
//     Partial<
//         Pick<
//             Record<keyof User, Query>,
//             'id' | 'name'
//         >,
//     >;    

// type userRequiredQuery = Required<userQuery>

type userQueryMap = {
    [Tprop in keyof User]?: Query<User[Tprop]>
}

function searchContacts(users: User[], query: userQueryMap) {
    return users.filter(user => {
        for (const property of Object.keys(user) as (keyof User)[]) {
            const queryProperty = query[property] as Query<User[keyof User]>;
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
});
