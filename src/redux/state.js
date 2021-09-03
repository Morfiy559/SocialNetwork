import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        },
        sidebarPage:{}
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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage,action);

        this._callSubscriber(this._state);
    }

}






export default store;
window.store=store;