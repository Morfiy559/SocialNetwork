const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store ={
    _state :{
        profilePage:{
            posts:[
                {id:1,message:'Hi, how are you?', likesCount:12},
                {id:2,message:"I'm fine!",likesCount: 15},
                {id:2,message:"I'm f!",likesCount: 15},
                {id:2,message:"I'm !",likesCount: 23},
                {id:2,message:"I'm ne!",likesCount: 55},
            ],
            newPostText:'kkkkkk'

        },
        dialogsPage:{
            dialogs: [
                {id:1,name:'Pavel'},
                {id:2,name:'Matvey'},
                {id:3,name:'Timur'},
                {id:4,name:'Oleg'},
            ],
            messages: [
                {id:1,message:'hi'},
                {id:2,message:'how are you'},
                {id:3,message:'i"m fine'},
                {id:4,message:'urur'},
                {id:5,message:'ur'},
            ],
            newMessageText:'hi!'
        }

    },
    _callSubscriber(){
        console.log('hhhhurma');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText= action.newText;
            this._callSubscriber(this._state);
        } else if(action.type==='SEND-MESSAGE'){
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type==='UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText= action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator=()=>({ type: ADD_POST})

export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, newText:text})

export const sendMessageActionCreator=()=>({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator=(text)=>({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})


export default store;
window.store=store;

export class updateNewPostActionCreator {
}