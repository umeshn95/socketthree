import React from 'react';
import { FaAnchor } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import { AiOutlineSetting,AiOutlineBulb,AiOutlineCloudSync } from "react-icons/ai";
import {About, Button,ButtonGrid, Description, Head, Headings, Logo, Longdescription, Main,MainGrid, Shortdescription, Subgrid1, Subgrid2, SuperSubgrid1} from './Aboutus.elements';
const descriptionMotion = {
    rest: {
      opacity:0,
        y: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    },
    hover: {
     opacity:0.6,
      y: -15,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  
  const logoMotion = {
    rest: { opacity: 1,y:20, duration:0.8, type: "tween", ease: "easeIn" },
    hover: {
      opacity: 0,
      y:-30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  const headingMotion = {
    rest: { opacity: 0.6,y:30, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      y:-20,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
function Aboutus() {
    return (
        <IconContext.Provider value={{ color: "blue", size:'50' }}>
        <Main>
            <MainGrid>
                <Subgrid1>

                <About>
                
                    About Us
                </About>
                <Headings>
                Innovating with a Digital Mindset
                </Headings>
                <Shortdescription>
                
                From idea deliver, our duty is to provide the ideal balance between creativity and technological innovation. 
                </Shortdescription>
                <Longdescription>
                
                ZetaMonk is the fastest growing software development company. our competencies lie in setting up dedicated software development teams for mobile app development, web development, application maintenance, artificial intelligence, open source and machine learning things.We deliver high quality business solutions that reflect the profound knowledge & understanding of emerging technologies in today's emerging competitive world.
                </Longdescription>
                <ButtonGrid>
               <Link to ='/contactus'> <Button>Get In Touch</Button></Link>
                </ButtonGrid>

                </Subgrid1>
                <Subgrid2>
                    <SuperSubgrid1 initial="rest" whileHover="hover" animate="rest">
                        <Logo variants={logoMotion}><FaAnchor ></FaAnchor></Logo>
                        <Head variants={headingMotion}>
Experience Design</Head>
                        <Description variants={descriptionMotion} >

                        Design an engaging product that is easy-to-use, attractive and functional</Description>
                    </SuperSubgrid1 >
                    <SuperSubgrid1 initial="rest" whileHover="hover" animate="rest">
                    
                        <Logo variants={logoMotion}><AiOutlineSetting></AiOutlineSetting></Logo>
                        <Head variants={headingMotion}>Digital Services</Head>
                        <Description variants={descriptionMotion}>

                        We provide Service that cover all parts of the architecture. From setting up and deploying a Kubernetes Cluster, adding an Ingress Router, configuring HELM templates </Description>
                    </SuperSubgrid1>
                    <SuperSubgrid1 initial="rest" whileHover="hover" animate="rest">
                    
                        <Logo variants={logoMotion}><AiOutlineBulb></AiOutlineBulb></Logo>
                        <Head variants={headingMotion}>Content Engineer</Head>
                        <Description variants={descriptionMotion} >
                        Among all Internet marketing agencies, we’re the only one that generates, validates and reports online sales leads in real time</Description>
                    </SuperSubgrid1>
                    <SuperSubgrid1 initial="rest" whileHover="hover" animate="rest">
                
                        <Logo variants={logoMotion}><AiOutlineCloudSync></AiOutlineCloudSync></Logo>
                        <Head variants={headingMotion}>Mobile Development</Head>
                        <Description variants={descriptionMotion}>
                        Mobile application development presents unique challenges considering the vast variety of operating systems, device types, screen sizes, and device features and functionalities.</Description>
                    </SuperSubgrid1>

                </Subgrid2>
            </MainGrid>
        </Main></IconContext.Provider>
    )
}

export default Aboutus
