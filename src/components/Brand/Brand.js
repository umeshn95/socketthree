import React from 'react';
import { FaAnchor } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';
import { AiOutlineSetting,AiOutlineBulb,AiOutlineCloudSync } from "react-icons/ai";
import  {Main,MainGrid} from './Brand.elements';
import tata from '../../images/tata.jpg';
import hdfc from '../../images/hdfc.png';
import lupin from '../../images/lupin.png';
import hero from '../../images/hero.png';
import big from '../../images/bigb.jpg';
import dps from '../../images/dps.png';
import {motion} from 'framer-motion';
import Container_heading from '../Webdevelopment/Container_heading';
import './Brand.css'

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
        <Container_heading heading='Brands We Serve'></Container_heading>

        <Main>

            <MainGrid>
            <img src={tata} style={{height:'100px',width:'150px'}}></img>
            <img src={hdfc} style={{height:'100px',width:'150px'}}></img>
            <img src={hero} style={{height:'100px',width:'150px'}}></img>
            <img src={big} style={{height:'100px',width:'150px'}}></img>
            <img src={dps} style={{height:'100px',width:'150px'}}></img>
            <img src={lupin} style={{height:'100px',width:'150px'}}></img>

        
        </MainGrid>
        </Main></IconContext.Provider>
    )
}

export default Aboutus
