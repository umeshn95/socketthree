import React from 'react'
import { Description, Subgrid2,Heading, Main, MainGrid, MainImage, Shortheading, Subgrid1,SupersubGrid1, Subheading } from './Service.elements';
import Component from './Component';
import { IconContext } from 'react-icons/lib';
import { GrAnchor } from "react-icons/gr";
import { RiHomeWifiLine } from 'react-icons/ri';
import { BiBarChartAlt } from 'react-icons/bi';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscServerProcess } from "react-icons/vsc";
import { SiAdobeindesign } from "react-icons/si";
import { BsChat } from "react-icons/bs";

function Service() {

    return (
        <IconContext.Provider value={{ color: "blue", size:'60' }}>

        <Main>
           <MainGrid>
            <Subgrid1>
                <SupersubGrid1>
               <Heading> OUR SERVICES</Heading>
               <Subheading>What We Offer for You</Subheading>
                </SupersubGrid1>
                <Description>
ZetaMonk deep industry expertise enables global brands to hit the ground running.
</Description>
            </Subgrid1>
            <Subgrid2>
                <Component links='/webdev' icon={<VscServerProcess></VscServerProcess>} head='Web Development' desc='Unique Web Design and Development,Our dedicated Team is continously improvising with time.' ></Component>
                <Component links='/chatbot' icon={<BsChat></BsChat>} head='Chatbot Development' desc='We Design Intelligent Chatbot With Instant Reply and Solve Business related problems.' ></Component>
                <Component links='/schoolmanage' icon={<SiAdobeindesign></SiAdobeindesign>} head='UI/UX Development' desc='We Provide Custom UI/UX Solutions, ZetaMonk has helped businesses with beautiful design.' ></Component>
                <Component links='/mobile' icon={<VscDeviceMobile></VscDeviceMobile>} head='Mobile Development' desc='Unique Web Design and Development,Our dedicated Team is continously thriving towards excellence.' ></Component>
                <Component links='/digitalmarket' icon={<BiBarChartAlt></BiBarChartAlt>} head='Digital Marketing' desc='We have digital marketing solutions for every Industries.' ></Component>
                <Component links='/iot' icon={<RiHomeWifiLine></RiHomeWifiLine>} head='Home Automation' desc='We Provide Complete Home Automation Services Ranging From Automatic Security to Automatic Appliance control.' ></Component>
               
            </Subgrid2>
            </MainGrid> 
        </Main>
        </IconContext.Provider>
    )
}

export default Service
