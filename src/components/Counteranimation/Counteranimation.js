import React from 'react'
import Component from './Component'
import { Main, MainGrid, Subgrid } from './Counteranimation.element'
import {motion} from 'framer-motion';
function Counteranimation() {
    return (
        <Main>
            <MainGrid>
                <Component state='HAPPY'customer='Clients' description=''></Component>
                <Component state='SATISFACTION'customer='Services' description=''></Component>
                <Component state='RETENTION' customer='Customers' description=''></Component>
            </MainGrid>
        </Main>
      
    )
}

export default Counteranimation
