import React from 'react';
import { InfoSection, Pricing, Pricing_card } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import { homeObjOne, homeObjThree,pricingObj } from './Data';

function Services() {
  return (
    <>
      <Pricing {...pricingObj} />
        <Pricing_card></Pricing_card>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Services;
