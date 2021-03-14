const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'stepan' },
    { id: 2, name: 'andrii' },
    { id: 3, name: 'oleg' }
  ],

  messages: [
    { id: 1, message: 'Who are you?' },
    { id: 2, message: 'Why' },
    { id: 3, message: 'Hello' },
    { id: 4, message: 'Yo' }
  ]
}

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }]
      };

    default:
      return state;
  }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogReducer;