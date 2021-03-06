import {ADD_USER, DELETE_USER} from './actions';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };
            return {
                ...state,
                users: state.users.concat(newPerson)
            }
        case DELETE_USER:
            const new_users = state.users.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                users: new_users
            }
        default:
            return state;
    }
};

export default reducer;