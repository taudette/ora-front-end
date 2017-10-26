const userReducerDefaultState = {
  sessionId: ''
}

console.log(userReducerDefaultState)

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SESSION_ID':
    console.log(action)
      return {
        ...state,
        sessionId: action.data
      }
    default:
      return state;
  }
};
