const chatReducerDefaultState = {
    messages: []
}

export default (state = chatReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOAD_MESSAGES':
      return {
        ...state.messages,
        time: action.data.time,
        messageText: action.data.messageText,
        userName: action.data.userName
      }
    default:
      return state;
  }
};