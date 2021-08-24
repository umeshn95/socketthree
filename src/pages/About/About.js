import React from 'react';
import { AboutSecret, Counter, Custom, InfoSection, TechStack,GoToTop, Aboutus, Whatwedo} from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';


function About() {
  return (
    <>
      {/* <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} /> */}
  <Aboutus></Aboutus>
      

      <Counter></Counter>

    <AboutSecret></AboutSecret>
    <Whatwedo></Whatwedo>

    <ScrollToTop></ScrollToTop>
    </>
  );
}

export default About;