const userReducerDefaultState = {
    sessionId: ''
}

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SESSION_ID':
            return {
                ...state,
                sessionId: action.data
            }
        default:
            return state;
    }
};
