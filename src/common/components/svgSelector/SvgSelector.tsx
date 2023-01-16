import React from 'react';

type Props = {
    svgname: SvgName
}

export type SvgName =
    'follow'
    | 'unFollow'
    | 'arrowLeft'
    | 'arrowDoubleLeft'
    | 'arrowRight'
    | 'arrowDoubleRight'
    | 'profile'
    | 'users'
    | 'dialogs'
    | 'news'
    | 'login'
    | 'password'
    | 'captcha'
    | 'likes'
    | 'delete'
    | 'settings'
    | 'edit'
    | 'photo'

export const SvgSelector = (props: Props) => {
    switch (props.svgname) {
        case 'follow':
            return <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path fill="none" d="M0 0h24v24H0z"/>
                <path
                    d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm5.793 8.914 3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414 2.12 2.121z"/>
            </svg>
        case 'unFollow':
            return <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path fill="none" d="M0 0h24v24H0z"/>
                <path
                    d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586 2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415L19 17.586z"/>
            </svg>
        case 'arrowLeft':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.842 3.135a.5.5 0 0 1 .023.707L5.435 7.5l3.43 3.658a.5.5 0 0 1-.73.684l-3.75-4a.5.5 0 0 1 0-.684l3.75-4a.5.5 0 0 1 .707-.023Z"
                    fill="#000"
                />
            </svg>
        case 'arrowDoubleLeft':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.854 3.854a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5l3.647-3.646Zm6 0a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.646Z"
                    fill="#000"
                />
            </svg>
        case 'arrowRight':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.158 3.135a.5.5 0 0 1 .707.023l3.75 4a.5.5 0 0 1 0 .684l-3.75 4a.5.5 0 1 1-.73-.684L9.566 7.5l-3.43-3.658a.5.5 0 0 1 .023-.707Z"
                    fill="#000"
                />
            </svg>
        case 'arrowDoubleRight':
            return <svg
                style={{marginBottom: '-2px'}}
                width={14}
                height={14}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5l-3.647 3.646Zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5l-3.647 3.646Z"
                    fill="#000"
                />
            </svg>
        case 'users':
            return <svg
                style={{marginBottom: '4px'}}
                width={28}
                height={28}
                viewBox="0 -8 72 72"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <defs>
                    <style>{".cls-1{fill:#fff}"}</style>
                </defs>
                <title>{"users"}</title>
                <path
                    className="cls-1"
                    d="M18.87 28.44c.2.21.41.4.63.6a10.59 10.59 0 0 0 14.15 0c.22-.2.43-.39.62-.6s.4-.43.58-.65a10.64 10.64 0 1 0-16.55 0c.18.21.38.44.57.65ZM41.63 25.76c.17.18.35.35.53.52a9 9 0 0 0 12.05 0c.19-.17.36-.34.53-.52a6.41 6.41 0 0 0 .49-.55 9 9 0 0 0-7-14.73 9 9 0 0 0-7 14.73c.07.19.23.38.4.55Z"
                />
                <path
                    className="cls-1"
                    d="M9.49 45.52h34.17a1.57 1.57 0 0 0 1.17-.52 1.24 1.24 0 0 0 .31-1 18.77 18.77 0 0 0-9.9-14.22 12.25 12.25 0 0 1-17.33 0A18.77 18.77 0 0 0 8 44a1.25 1.25 0 0 0 .31 1 1.57 1.57 0 0 0 1.18.52Z"
                />
                <path
                    className="cls-1"
                    d="M9.49 45.52h34.17a1.57 1.57 0 0 0 1.17-.52 1.24 1.24 0 0 0 .31-1 18.77 18.77 0 0 0-9.9-14.22 12.25 12.25 0 0 1-17.33 0A18.77 18.77 0 0 0 8 44a1.25 1.25 0 0 0 .31 1 1.57 1.57 0 0 0 1.18.52Z"
                />
                <path
                    className="cls-1"
                    d="M64 39a16 16 0 0 0-8.42-12.11 10.41 10.41 0 0 1-14.76 0 16.59 16.59 0 0 0-3.13 2.16 18.81 18.81 0 0 1 8.26 11.24h16.78a1.33 1.33 0 0 0 1-.44A1.06 1.06 0 0 0 64 39Z"
                />
            </svg>
        case 'profile':
            return <svg
                fill="#fff"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-color"
                stroke="#fff"
                {...props}
            >
                <path
                    d="m21.71 11.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 1.42 1.42l.29-.3v7.89A1.77 1.77 0 0 0 5.83 22H8.5a1 1 0 0 0 1-1v-4.9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.67A1.77 1.77 0 0 0 20 20.3v-7.89l.29.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
                    style={{
                        fill: "#fff",
                    }}
                />
            </svg>
        case 'dialogs':
            return <svg
                fill="#fff"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                stroke="#fff"
                {...props}
            >
                <path d="m16 16.8 13.8-9.2C29.2 5.5 27.3 4 25 4H7C4.7 4 2.8 5.5 2.2 7.6L16 16.8z"/>
                <path
                    d="M16.6 18.8c-.2.1-.4.2-.6.2s-.4-.1-.6-.2L2 9.9V23c0 2.8 2.2 5 5 5h18c2.8 0 5-2.2 5-5V9.9l-13.4 8.9z"/>
            </svg>
        case 'news':
            return <svg
                fill="#fff"
                width={20}
                height={20}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                {...props}
            >
                <title>{"ionicons-v5-n"}</title>
                <path
                    d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32 32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112Z"/>
                <path
                    d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15 1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416ZM96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144Z"/>
            </svg>
        case 'login':
            return <svg
                width={18}
                height={16}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M12 11a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM3 22v-4a5.006 5.006 0 0 1 5-5h8a5.006 5.006 0 0 1 5 5v4a1 1 0 0 1-2 0v-4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v4a1 1 0 0 1-2 0Z"/>
            </svg>
        case 'password':
            return <svg
                width={18}
                height={15}
                viewBox="0 0 128 128"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M64 1C47.5 1 34 14.5 34 31v26H15v70h99V57H94V31C94 14.5 80.5 1 64 1zM42 31c0-12.1 9.9-22 22-22s22 9.9 22 22v26H42V31zm64 34v54H23V65h83z"/>
                <path d="M60 81h8v22h-8z"/>
            </svg>
        case 'captcha':
            return <svg
                width={18}
                height={18}
                viewBox="0 0 48 48"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M32.615 10.883V8.615A8.614 8.614 0 0 0 24 0a8.615 8.615 0 0 0-8.615 8.615v2.268H12.33V28h23.34V10.883h-3.055zm-6.183 11.832h-4.734l1.175-2.963a2.522 2.522 0 0 1-1.406-2.257 2.534 2.534 0 1 1 5.067 0c0 .98-.561 1.82-1.375 2.243l1.273 2.977zm-7.42-11.832V8.615a4.988 4.988 0 0 1 9.976 0v2.268h-9.976zM0 32v16h48V32H0zm44 12H4v-8h40v8z"
                    fill="#241F20"
                />
                <path fill="#241F20" d="M11 38.5h6v3h-6zM21 38.5h6v3h-6zM31 38.5h6v3h-6z"/>
            </svg>
        case 'likes':
            return <svg
                fill="#1d2f38"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="-0.5 0.5 42 42"
                xmlSpace="preserve"
                {...props}
            >
                <path
                    d="M20.938 10.725C14.51.796 1.5 6.205 1.5 17.021c0 8.122 17.836 20.827 19.438 22.479C22.551 37.848 39.5 25.143 39.5 17.021c0-10.734-12.122-16.225-18.562-6.296z"/>
            </svg>
        case 'delete':
            return <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M6 7H5m1 0h2m10 0h1m-1 0h-2m-6 4v5m4-5v5M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 7h8"
                    stroke="red"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        case 'edit':
            return <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m18.94 3.12 2.122 2.122a3 3 0 0 1 0 4.243l-1.803 1.803-6.364-6.364 1.803-1.803a3 3 0 0 1 4.242 0Zm-7.106 2.865-8.127 8.127a3 3 0 0 0-.861 1.797l-.394 3.617a2 2 0 0 0 2.204 2.205l3.618-.394a3 3 0 0 0 1.796-.86l8.128-8.128-6.364-6.364Z"
                    fill="#000"
                />
            </svg>
        case 'photo':
            return <svg
                width={40}
                height={40}
                viewBox="-1 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="cf-icon-svg"
                {...props}
            >
                <path
                    d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.874-2.287a.803.803 0 0 0-.8-.8h-2.054v-.251a.802.802 0 0 0-.8-.8h-2.93a.802.802 0 0 0-.8.8v.25H4.186a.802.802 0 0 0-.8.8v5.166a.802.802 0 0 0 .8.8h8.639a.803.803 0 0 0 .8-.8zm-2.692 2.582a2.427 2.427 0 1 1-2.428-2.427 2.428 2.428 0 0 1 2.428 2.427zm-4.055 0a1.627 1.627 0 1 0 1.627-1.627A1.63 1.63 0 0 0 6.88 9.795zm2.75-3.931a.4.4 0 1 0 .4.4.4.4 0 0 0-.4-.4z"/>
            </svg>

        default:
            return <svg></svg>
    }
};

