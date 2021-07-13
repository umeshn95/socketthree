import React from 'react';
import { InfoSection, Pricing } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import { homeObjOne, homeObjThree,pricingObj } from './Data';

function Services() {
  return (
    <>
      <Pricing {...pricingObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Services;
