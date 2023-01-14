import React from 'react';

type Props = {
    svgname: SvgName
}

type SvgName = 'follow' | 'unFollow' | 'arrowLeft' | 'arrowDoubleLeft' | 'arrowRight' | 'arrowDoubleRight'

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
            return  <svg
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
        default:
            return <svg></svg>
    }
};

