import React from 'react';

const StateContext = React.createContext({});

const StateProvider = (props) => {
    const initialState = {
        
        cart: [],
        setState: (newState) => {
            updateState(state => {
                return { ...state, ...newState };
            });
        }
    }

    const [ state, updateState ] = React.useState(initialState);

    return (
        <StateContext.Provider value={ state }>
            { props.children }
        </StateContext.Provider>
    );
}

export default StateProvider ;
export { StateContext };
