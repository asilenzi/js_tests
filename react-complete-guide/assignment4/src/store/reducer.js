const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.payload.value
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const new_results = state.results.filter(result => result.id !== action.payload.id);
            return {
                ...state,
                results: new_results
            }
    }
    return state;
};

export default reducer;