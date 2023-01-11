import {AllActionsTypes} from "../../app/redux-store";



const sidebar: SidebarStateType = {
    friends: [
        {
            id: 1,
            name: 'Andre',
            avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/47/4728872986d1945672dcce488d66a3f9c73cfd14.jpg'
        },
        {
            id: 2,
            name: 'Sasha',
            avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cd/cd5f9289ba1dd52feed889864112f04174f361a9.jpg'
        }, {
            id: 3,
            name: 'Sveta',
            avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d4f601fa54910219064ab99ee51084225d7734f8.jpg'
        },
    ]
}

export const SidebarReducer = (state: SidebarStateType = sidebar, action: AllActionsTypes): SidebarStateType => {
    return state
}

//types
export type FriendType = {
    id?: number,
    name: string,
    avatar: string
}

export type SidebarStateType = {
    friends: Array<FriendType>
}

