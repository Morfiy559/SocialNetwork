const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
        {id:4,message:'ur-ur'},
        {id:5,message:'ur'},
    ],
    newMessageText:'hi!'
}

const dialogsReducer = (state=initialState,action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{

            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return  state;
    }
}

export const sendMessageActionCreator=()=>({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator=(text)=>({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})

export default dialogsReducer;