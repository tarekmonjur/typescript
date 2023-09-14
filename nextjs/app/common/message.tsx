"use client";

import messageHoc from './hoc';

interface CustomMessage {
    title: string;
    message: string;
}


const MessageComponent = (props: CustomMessage): any => {
    return (
        <p>
            <strong>{props.title}</strong>:
            &nbsp;{props.message}
        </p>
    );
}

const Message = messageHoc(MessageComponent);

export default Message;