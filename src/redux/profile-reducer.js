const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id:1,message:'Hi, how are you?', likesCount:12},
        {id:2,message:"I'm fine!",likesCount: 15},
        {id:2,message:"I'm f!",likesCount: 15},
        {id:2,message:"I'm !",likesCount: 23},
        {id:2,message:"I'm ne!",likesCount: 55},
    ],
    newPostText:'kkkkkk'
}

const profileReducer = (state = initialState,action) => {

    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
                posts:[...state.posts,{id: 5, message: state.newPostText, likesCount: 0}],
                newPostText : '',
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator=()=>({ type: ADD_POST})
export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;