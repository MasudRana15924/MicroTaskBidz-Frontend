import React from 'react';
import portfolioImg from'../../images/Portfolio.png'

const Portfolio = () => {
    return (
        <div className="mt-20">
            <img src={portfolioImg} alt="" className="lg:w-3/4 lg:mx-auto mt-10 lg:h-screen"/>
        </div>
    );
};

export default Portfolio;