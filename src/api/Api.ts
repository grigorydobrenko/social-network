import axios from "axios";
import {UserPropsType} from "../redux/users-reducer";

const PATH = `https://social-network.samuraijs.com/api/1.0/`
const API_KEY = "f084858c-82a6-4229-bddd-b62d132d9a71"

const instance = axios.create({
    baseURL: PATH,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})


type getAuthResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

type getUserProfileResponseType = {
    items: Array<UserPropsType>
    totalCount: number
    error: string
}

export type getProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type followUnFollowResponseData = {
    resultCode: ResultCodesEnum
    messages: Array<string>,
    data: any
}

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1
}

export const usersAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUserProfileResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id: number) {
        return instance.post<followUnFollowResponseData>(`follow/${id}`).then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete<followUnFollowResponseData>(`follow/${id}`).then(response => response.data)
    }


}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<getProfileResponseType>(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }

}


export const authAPI = {
    me() {
        return instance.get<getAuthResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }

}