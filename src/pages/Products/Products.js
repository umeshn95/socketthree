import React from 'react';
import { InfoSection } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import { homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Products;
