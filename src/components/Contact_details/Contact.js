import React from 'react'
import Component from './Contact_details'
import { Main, MainGrid, Subgrid } from './Contacts'
import {motion} from 'framer-motion';
function Counteranimation() {
    return (
        <Main>
            <MainGrid>
                <Component state='USA'customer='' description=''></Component>
                <Component state='INDIA'customer='8th cross, Neeladri Nagar, Electronic City phase 1, Bangalore 560100' description=''></Component>
                <Component state='NETHERLAND' customer='Clients' description=''></Component>
            </MainGrid>
        </Main>
      
    )
}

export default Counteranimation
