import axios from "axios";


const PATH = `https://social-network.samuraijs.com/api/1.0/`
const API_KEY = "f084858c-82a6-4229-bddd-b62d132d9a71"


export const usersAPI = {
    getAuth() {
        return axios.get(PATH + `auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    },
    getUserProfile(userId: string) {
        return axios.get(PATH + `profile/` + userId, {
            withCredentials: true
        }).then(response => response.data)
    },
    getUsers(currentPage: number, pageSize: number) {
        return axios.get(PATH + `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    follow(id: number) {
        return axios.post(PATH + `follow/${id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": API_KEY
            }
        }).then(response => response.data)
    },
    unFollow(id: number) {
        return axios.delete(PATH + `follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": API_KEY
            }
        }).then(response => response.data)
    }


}