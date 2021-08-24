import React from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Aboutus, LandingPage, Pricing, Pricing_card, Whatwedo } from '../../components';
import Counteranimation from '../../components/Counteranimation/Counteranimation';
import ScrollToTop from '../../components/ScrollToTop';
import { pricingObj } from './Data';


function Home() {
  return (
    <>
      <LandingPage></LandingPage>
      <Aboutus></Aboutus>
     <Whatwedo></Whatwedo>
     <Counteranimation></Counteranimation>
     <Pricing {...pricingObj} />
     <Pricing_card></Pricing_card>

      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Home;
