
interface Contact {
    id: number;
    name: string;
}

interface ContactEvent {
    contactId: Contact['id'];
}

interface ContactDeleteEvent extends ContactEvent {

}

interface ContactStatusEvent extends ContactEvent {

}

interface ContactEvents {
    deleted: ContactDeleteEvent;
    statusChanged: ContactStatusEvent;
}


function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
): void {
    if (eventName === 'statusChanged') {
        handler({contactId: 12});
    }
}

handleEvent('statusChanged',  evt => console.log(evt));