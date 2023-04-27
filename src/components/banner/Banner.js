import React from 'react';
import bannerImg from '../../images/banner.jpg'

const banner = () => {
    return (
        <div>
            <img src={bannerImg} alt="" className="max-h-96 w-full"/>
        </div>
    );
};

export default banner;