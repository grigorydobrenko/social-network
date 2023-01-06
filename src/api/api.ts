import axios from "axios";
import {UserType} from "../redux/users-reducer";

const PATH = `https://social-network.samuraijs.com/api/1.0/`
const API_KEY = "f084858c-82a6-4229-bddd-b62d132d9a71"

const instance = axios.create({
    baseURL: PATH,
    withCredentials: true,
    headers: {
        "API-KEY": API_KEY
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id: number) {
        return instance.post<CommonResponseType>(`follow/${id}`).then(response => response.data)
    },
    unFollow(id: number) {
        return instance.delete<CommonResponseType>(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<GetAuthResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<CommonResponseType>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<CommonResponseType>('auth/login')
    }
}

//types
type GetAuthResponseType = CommonResponseType<{
    id: number
    email: string
    login: string
}>

type CommonResponseType<T = {}> = {
    resultCode: ResultCodesEnum
    messages: string[]
    data: T
}

type GetUsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export type ProfileType = {
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

export enum ResultCodesEnum {
    Succes = 0,
    Error = 1
}