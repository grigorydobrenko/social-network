import React from 'react';
import preloader from "../../../assets/images/__Iphone-spinner-1.gif";
import preloader1 from "../../../assets/images/30.gif";

const Preloader = () => {
    return (
        <div style={{background: 'white'}}><img src={preloader1} alt={'preloader'}/></div>
    );
};

export default Preloader;