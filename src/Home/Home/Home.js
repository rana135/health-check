import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Medicine from '../../Medicine/Medicine'
import Courses from '../../Courses/Courses';
import Allservices from '../Allservices/Allservices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Allservices></Allservices>
            <Medicine></Medicine>
            <Courses></Courses>
        </div>
    );
};

export default Home;