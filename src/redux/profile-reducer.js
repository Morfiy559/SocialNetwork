import * as axios from "axios";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "I'm fine!", likesCount: 15},
        {id: 2, message: "I'm f!", likesCount: 15},
        {id: 2, message: "I'm !", likesCount: 23},
        {id: 2, message: "I'm ne!", likesCount: 55},
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likesCount: 0}],
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST,newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => {
    return (dispatch) =>{
        profileAPI.getProfile(userId).then(
            data => {
                dispatch(setUserProfile(data));
            }
        )
    }
}

export default profileReducer;