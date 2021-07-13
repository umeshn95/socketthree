import React from 'react';
import { AboutSecret, Counter, Custom, InfoSection, TechStack,GoToTop} from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';


function About() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />

      

      <Counter></Counter>

    <AboutSecret></AboutSecret>

    <ScrollToTop></ScrollToTop>
    </>
  );
}

export default About;