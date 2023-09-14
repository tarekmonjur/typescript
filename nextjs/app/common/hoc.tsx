"use client";

import React, {Component} from "react";

const initialState = {
    title: 'default',
    message: 'Hoc are cool',
};

// type State = Readonly<typeof initialState>;
type State = Record<string, string>;

const messageHoc = (WrappedComponent: any) => {
    class HOC extends Component <State>{
        // readonly state: State = initialState;
        state: State = {...initialState};
        constructor(props: State) {
            super(props);
            if (props.title) {
                this.state.title = props.title;
            }

            if (props.message) {
                this.state.message = props.message;
            }
        }

        render() {
            
            return (
                // <WrappedComponent title={this.state.title} message={this.state.message} />
                <WrappedComponent {...this.state} />
            );
        }
    }
    return HOC;
}

export default messageHoc;