// let posts= [
//     {id:1,message:'Hi, how are you?', likesCount:12},
//     {id:2,message:"I'm fine!",likesCount: 15},
//     {id:2,message:"I'm f!",likesCount: 15},
//     {id:2,message:"I'm !",likesCount: 23},
//     {id:2,message:"I'm ne!",likesCount: 55},
// ]
//
// let dialogs = [
//     {id:1,name:'Pavel'},
//     {id:2,name:'Matvey'},
//     {id:3,name:'Timur'},
//     {id:4,name:'Oleg'},
// ]
//
// let messages= [
//     {id:1,message:'hi'},
//     {id:2,message:'how are you'},
//     {id:3,message:'i"m fine'},
//     {id:4,message:'urur'},
//     {id:5,message:'ur'},
// ]

let state ={
    profilePage:{
        posts:[
            {id:1,message:'Hi, how are you?', likesCount:12},
            {id:2,message:"I'm fine!",likesCount: 15},
            {id:2,message:"I'm f!",likesCount: 15},
            {id:2,message:"I'm !",likesCount: 23},
            {id:2,message:"I'm ne!",likesCount: 55},
        ],

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

}

export let addPost = (postMessage)=>{
    debugger;
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
}
export default state;
