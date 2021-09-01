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
            ]
        }

    },
    _callSubscriber(){
        console.log('hhhhurma');
    },
    getState(){
        return this._state;
    },
    addPost(){
        let newPost = {
            id:5,
            message:this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText=newText;

        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}
export default store;
window.store=store;