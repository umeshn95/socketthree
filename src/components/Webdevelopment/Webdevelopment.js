import React from 'react'
import { Devgrid, Eightgrid, Main, MainGrid, Subdevgrid, Subgrid } from './Webdevelopment.element';
import Component_header from './component_header';
import { IconContext } from 'react-icons/lib';
import { GrAnchor } from "react-icons/gr";
import Header from './Container_heading';
import laptop from '../../images/pexels-negative-space-169573.jpg'
import Component_contents from './component_contents';
import { FaAnchor } from 'react-icons/fa';
import Component_services from './Component_services';
import Component_services_types from './Component_services_types';
import Component_development from './component_development';
import office1 from '../../images/pexels-fauxels-3184287.jpg'
import office2 from '../../images/pexels-anna-shvets-3987020.jpg'
import office3 from '../../images/pexels-andrea-piacquadio-3756678.jpg'
import office4 from '../../images/pexels-ann-nekr-5797902.jpg'
import { AiOutlineBulb, AiOutlineCloudSync, AiOutlineSetting } from 'react-icons/ai';

function Webdevelopment() {

    return (
        <IconContext.Provider value={{ color: "#6EE348", size:'50' }}>
<Main>
<Component_header heading='Problems we solve' description='Design, development and strategy solutions that deliver results'/>
<Header heading='Wide Range of Software Development Services'/>
<MainGrid style={{paddingTop:'60px', paddingBottom:'160px'}}>
    <img src={laptop} style={{height:'25rem',width:'90%',justifySelf:'center' }}></img>
    <Subgrid>
    <Component_contents head='Experience Design'
    description='Mid-size to large companies

    Simplify your business
    
    Design and develop new apps'
    logo={<FaAnchor ></FaAnchor>}
    />
    <Component_contents head='Our Consultants'
    description='Architectural Design

    Infrastructure Planning
    
    UI & UX Design'
    logo={<AiOutlineSetting ></AiOutlineSetting>}
    />
    <Component_contents head='Startups'
    description='Affordable solutions

    Dedicated Team
    
    Full lifecycle management'
    logo={<AiOutlineBulb ></AiOutlineBulb>}
    />
    <Component_contents head='Our Team'
    description='Top Tier Talent

    Avoid lengthy hiring process
    
    Fail-safe way to build your idea'
    logo={<AiOutlineCloudSync ></AiOutlineCloudSync>}
    />
</Subgrid>
</MainGrid>
<hr style={{opacity:'0.3'}}></hr>

<Component_services/>

<Eightgrid>
    <Component_services_types head='Accounting' description='Be on top of your finances'/>
    <Component_services_types head='Sales' description='Complete orders successfully'/>
    <Component_services_types head='Inventory' description='Manage items & stocks'/>
    <Component_services_types head='CRM' description='Get more customers'/>
    <Component_services_types head='Projects' description='Manage teams, tasks, time'/>
    <Component_services_types head='E-commerce' description='Sell easily online'/>
    <Component_services_types head='Manufacturing' description='From raw material to sales'/>
    <Component_services_types head='Support' description='Close issues faster'/>
</Eightgrid>

<Devgrid style={{marginTop:'60px'}}>
<div>
<Header heading='MVP Development'/>
<p style={{textAlign:'center' ,fontSize:'14px'}}>Validate and measure your idea quickly</p>
</div>
<Subdevgrid style={{paddingTop:'60px',columnGap:'90px',rowGap:'90px'}}>
<Component_development head='Creationn'
    description='Our team is composed of entrepreneurs, we understand that the hard part of launching a MVP is to back it with right strategy and test all the hypothesis involved fast. You can ease your worries, and let us get on to work.'
    image={office1}
    />
<Component_development head='Strategy'
    description='Once we know about your idea, our extensive research team can help you understand your market better and enlighten you about the upcoming technologies that can affect your idea.'
    image={office2}
    
    />
<Component_development head='Prototyping'
    description='We understand that all good things start with a small hypothesis. Our intelligence team can help you come up with a set of hypothesis that you can test in the market to understand the potential of the idea.'
    image={office3}
    
    />
<Component_development head='Testing'
    description='Your MVP is just the beginning, our data intelligence team can help you understand the insights that your MVP generated and identify key business propositions that lead from the MVP.'
    image={office4}
    
    />
</Subdevgrid>

</Devgrid>


</Main>
</IconContext.Provider>
    )
}

export default Webdevelopment