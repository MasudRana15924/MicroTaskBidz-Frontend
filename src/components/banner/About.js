import React from 'react';
import aboutImg from '../../images/About.png'

const About = () => {
    return (
        <div className="mt-20">
            <img src={aboutImg} alt="" className="lg:w-3/4 lg:mx-auto mt-10 lg:h-screen"/>
        </div>
    );
};

export default About;