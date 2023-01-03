// import {DialogActionsType, dialogsReducer} from "./dialogs-reducer";
// import {profileReducer, ProfileActionsType} from "./profile-reducer";
// import {SidebarReducer} from "./sidebar-reducer";



// export type DialogType = {
//     name: string,
//     id: number,
// }
//
// export type MessageType = {
//     id?: number,
//     message: string
// }





// export type DialogStateType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }

// export type RootStateType = {
//     profilePage: ProfileStateType,
//     dialogPage: DialogStateType
//     sidebar: SidebarStateType
// }
//
// export type storeType = {
//     _state: RootStateType
//     _renderTree: () => void
//     subscriber: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ACTypes) => void
// }
//
//



// export const store: storeType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     message: 'Hi, its me',
//                     likes: 4,
//                 },
//                 {
//                     id: 2,
//                     message: 'Hello',
//                     likes: 15,
//                 },
//             ],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogs: [
//                 {
//                     name: 'Leha',
//                     id: 1,
//                 },
//                 {
//                     name: 'Dima',
//                     id: 2,
//                 }, {
//                     name: 'Max',
//                     id: 3,
//                 }, {
//                     name: 'Kate',
//                     id: 4,
//                 }, {
//                     name: 'Den',
//                     id: 5,
//                 },
//             ],
//             messages: [
//                 {
//                     id: 1,
//                     message: 'Hi'
//                 },
//                 {
//                     id: 2,
//                     message: 'Its me'
//                 }, {
//                     id: 3,
//                     message: 'Hello'
//                 },
//             ],
//             newMessageText: ''
//
//         },
//         sidebar: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Andre',
//                     avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/47/4728872986d1945672dcce488d66a3f9c73cfd14.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sasha',
//                     avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cd/cd5f9289ba1dd52feed889864112f04174f361a9.jpg'
//                 }, {
//                     id: 3,
//                     name: 'Sveta',
//                     avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d4f601fa54910219064ab99ee51084225d7734f8.jpg'
//                 },
//             ]
//         }
//     },
//
//     _renderTree() {
//         console.log('state changed')
//     },
//     subscriber(observer: () => void) {
//         this._renderTree = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.sidebar = SidebarReducer(this._state.sidebar, action)
//         this._renderTree()
//
//     }
// }





