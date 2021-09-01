import React from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Aboutus, Brand, LandingPage, Pricing, Pricing_card, Service, Whatwedo } from '../../components';
import Counteranimation from '../../components/Counteranimation/Counteranimation';
import ScrollToTop from '../../components/ScrollToTop';
import { pricingObj } from './Data';


function Home() {
  return (
    <>
      <LandingPage></LandingPage>
      <Brand></Brand>
      <Aboutus></Aboutus>
     <Counteranimation></Counteranimation>
     <Service></Service>

     <Pricing_card></Pricing_card>
     <Whatwedo></Whatwedo>

      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Home;
