import React from 'react';
import preloader from "../../../assets/images/__Iphone-spinner-1.gif";

const Preloader = () => {
    return (
        <div style={{background: 'white'}}><img src={preloader} alt={'preloader'}/></div>
    );
};

export default Preloader;