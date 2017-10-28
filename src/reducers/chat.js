const chatReducerDefaultState = []

export default (state = chatReducerDefaultState, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOAD_MESSAGES':
            return [
                ...state, 
                action.data
            ]
        default:
            return state;
    }
};
