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
        default:
            return <svg></svg>
    }
};

