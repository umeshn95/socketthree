import React from 'react';
import { Counter, InfoSection } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree,homeObjTwo,homeObjOne } from './Data';

function Webdev() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <Counter></Counter>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Webdev;