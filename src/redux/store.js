import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {

  _state: {
    pageProfile: {
      posts: [
        { id: 1, post: 'Hey, how are your', likesCount: 15 },
        { id: 2, post: 'Who are your', likesCount: 16 },
        { id: 3, post: 'What are you want', likesCount: 1 },
      ],
      newPostText: ''
    },

    pageDialogs: {
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
      ],
      newMessageText: ''
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 5,
      post: this._state.pageProfile.newPostText,
      likesCount: 0
    };

    this._state.pageProfile.posts.push(newPost);
    this._state.pageProfile.newPostText = '';

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.pageDialogs = dialogReducer(this._state.pageDialogs, action);
    this._state.pageProfile = profileReducer(this._state.pageProfile, action);
  

    this._callSubscriber(this._state);
  }

}




export default store;
window.store = store;