import React from 'react';
import Banner from '../banner/Banner'
import Portfolio from '../banner/Portfolio';
import Tasks from '../task/Tasks';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Tasks></Tasks>
            <Portfolio></Portfolio>
        </>

    );
};

export default Home;