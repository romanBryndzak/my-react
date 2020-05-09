import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '27681bfc-41a2-4aa7-896d-cc278014b22e'},
});

export const getDataUsers = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data
            )
    }
};

// export const yesFollowUsers = (id) => {
//     return instance.post(`follow/${id}`)
//         .then(response => {
//         return response.data
//     })
// };

export const notFollowedUsers = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        });
};