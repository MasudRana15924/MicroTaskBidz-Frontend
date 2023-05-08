import React from 'react';
import Banner from '../banner/Banner'
import Doctor from '../../pages/doctors/Doctor';
import Services from '../landingpage/Services';
import Acheivement from '../landingpage/Acheivement';
import Blog from '../landingpage/Blog';



const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <Acheivement></Acheivement>
            <Blog></Blog>
      
    
        </>

    );
};

export default Home;