const userReducerDefaultState = {}

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SESSION_ID':
            return {
                ...state,
                userId: action.data
            }
        default:
            return state;
    }
};
