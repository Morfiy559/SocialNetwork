import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '57532bf6-e55f-488a-bee7-a2fd0c3210a1'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`profile/status/`,{status:status})
            .then(response => response.data)
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image',photoFile);
        return instance.put(`profile/photo/`,formData)
            .then(response => response.data)
    },
    saveProfile(profile){
        return instance.put(`profile`,profile)
            .then(response => response.data)
    }
}
export const headerAPI = {
    authMe(){
        return instance.get(`auth/me`).then(response=>response.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`,{email, password, rememberMe}).then(response=>response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(response=>response.data)
    },
}

