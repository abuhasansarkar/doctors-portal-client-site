import React from 'react';
import Featured from './Featured';
import CardInfos from './CardInfos';
import ServicesCard from './ServicesCard';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import Contact from './Contact';
import Testimonial from './Testimonial';

const Home = () => {
     return (
          <>
             <Featured></Featured>  
             <CardInfos></CardInfos>
             <ServicesCard></ServicesCard>
             <DentalCare></DentalCare>
             <MakeAppointment></MakeAppointment>
             <Testimonial></Testimonial>
             <Contact></Contact>
          </>
     );
};

export default Home;