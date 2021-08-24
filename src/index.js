import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts= [
    {id:1,message:'Hi, how are you?', likesCount:12},
    {id:2,message:"I'm fine!",likesCount: 15},
    {id:2,message:"I'm f!",likesCount: 15},
    {id:2,message:"I'm !",likesCount: 23},
    {id:2,message:"I'm ne!",likesCount: 55},
]
let dialogs = [
    {id:1,name:'Pavel'},
    {id:2,name:'Matvey'},
    {id:3,name:'Timur'},
    {id:4,name:'Oleg'},
]
let messages= [
    {id:1,message:'hi'},
    {id:2,message:'how are you'},
    {id:3,message:'i"m fine'},
    {id:4,message:'urur'},
    {id:5,message:'ur'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
