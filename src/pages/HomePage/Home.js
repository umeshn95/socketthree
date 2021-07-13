import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Home;
