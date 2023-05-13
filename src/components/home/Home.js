import React from 'react';
import Banner from '../banner/Banner'
import Doctor from '../../pages/doctors/Doctor';
import Services from '../landingpage/Services';
import Acheivement from '../landingpage/Acheivement';
import Blog from '../landingpage/Blog';
import Nurses from '../../pages/nurses/Nurses';



const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctor></Doctor>
            <Acheivement></Acheivement>
            <Blog></Blog>
            <Nurses></Nurses>
      
    
        </div>

    );
};

export default Home;