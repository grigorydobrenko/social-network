export type PostType = {
    id: number,
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


export type profilePageType = {
    posts: Array<PostType>
}

export type dialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: profilePageType,
    dialogPage: dialogPageType
}

export let state: RootStateType = {
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
        ]
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
        ]


    }
}


/*
const DialogItemsData: Array<DialogItemPropsType> = [
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
]


const MessagesData: Array<MessagePropsType> = [
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
]

const PostsData: Array<MyPostPropsType> = [
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
]*/
