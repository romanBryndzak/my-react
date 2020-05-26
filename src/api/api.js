import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '24155da4-d8a4-4890-a25f-03b57c3d3ba2'},
});

export const authenticMeAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login() {
        return instance.post(`auth/login`, {})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
};

export const ProfileAPI = {
    userProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};

export const getDataUsers = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};

export const followedApi = {
    yesFollowedUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    notFollowedUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    }
};