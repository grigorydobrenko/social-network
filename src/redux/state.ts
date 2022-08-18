export type PostType = {
    id?: number,
    message: string,
    likes: number,
}

export type DialogType = {
    name: string,
    id: number,
}

export type MessageType = {
    id?: number,
    message: string
}

export type FriendType = {
    id?: number,
    name: string,
    avatar: string
}

export type sidebarType = {
    friends: Array<FriendType>
}

export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type dialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: profilePageType,
    dialogPage: dialogPageType
    sidebar: sidebarType
}

export type storeType = {
    _state: RootStateType
    _renderTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ACTypes) => void
}


type addPostACType = ReturnType<typeof addPostAC>
type changeTextACType = ReturnType<typeof changeTextAC>
type changeMessageTextACType = ReturnType<typeof changeMessageTextAC>
type addMessageACType = ReturnType<typeof addMessageAC>

export type ACTypes = addPostACType | changeTextACType | changeMessageTextACType | addMessageACType

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeTextAC = (text: string) => {
    return {
        type: 'CHANGE-TEXT',
        text
    } as const
}

export const changeMessageTextAC = (messageText: string) => {
    return {
        type: 'CHANGE-MESSAGE',
        messageText
    } as const
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}


export const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, its me',
                    likes: 4,
                },
                {
                    id: 2,
                    message: 'Hello',
                    likes: 15,
                },
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {
                    name: 'Leha',
                    id: 1,
                },
                {
                    name: 'Dima',
                    id: 2,
                }, {
                    name: 'Max',
                    id: 3,
                }, {
                    name: 'Kate',
                    id: 4,
                }, {
                    name: 'Den',
                    id: 5,
                },
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Its me'
                }, {
                    id: 3,
                    message: 'Hello'
                },
            ],
            newMessageText: ''

        },
        sidebar: {
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
    },

    _renderTree() {
        console.log('state changed')
    },
    subscriber(observer: () => void) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likes: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._renderTree()
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'CHANGE-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._renderTree()
        } else if (action.type === 'CHANGE-MESSAGE') {
            this._state.dialogPage.newMessageText = action.messageText
            this._renderTree()
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {id: 4, message: this._state.dialogPage.newMessageText}
            this._state.dialogPage.messages.push(newMessage)
            this._renderTree()
            this._state.dialogPage.newMessageText = ''
        }
    },


}




