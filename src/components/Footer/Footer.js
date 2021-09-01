import React,{useState} from 'react';
import { Button } from '../../globalStyles';
import zetalogo from '../../images/zetamonklogo.svg';
import {
  FaArtstation,
  FaCheckCircle,
  FaComment,
  FaMagnet,
  FaSkyatlas,
} from "react-icons/fa";
import { Container } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { FaPushed, FaHeadset, FaBuffer } from "react-icons/fa";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactSecres,
  ContactMain,
  Contactgrid,
  Contactfeedback,
  Feedbacklogo,
  FeedbackThankyou,
  Feedbackreply,
  Feedbackhome,
  Button1,
} from "./Footer.elements";
import { GiIndianPalace, GiUsaFlag } from 'react-icons/gi';

function Footer() {
  const [show, setShow] = useState(true);
  const [validemail, setValidemail] = useState("");

  const [email, setEmail] = useState("");

  const subscribe = () => {
    let data = { email };
    fetch("https://visheshsolanki.pythonanywhere.com/api/email/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.statusText == "Bad Request" && !email
          ? setValidemail("Enter valid email")
          : setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <FooterContainer show={show}>
        {/* <FooterSubscription>
        <FooterSubHeading>
          Connect Us for exclusive Pricing and to receive the latest Development news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput  type='email' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <Button onClick={subscribe} fontBig>Subscribe</Button>
          </Form>
      </FooterSubscription> */}
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                {" "}
                <img
                  src={zetalogo}
                  style={{ height: "25px", width: "25px" }}
                ></img>
                <span style={{ color: "#867AE9" }}>Zeta</span>
                <span style={{ color: "#E5D549", marginLeft: "5px" }}>
                  Monk
                </span>
              </FooterLinkTitle>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                ZetaMonk is a boutique digital transformation consultancy &
                software development company that provides IT solutions.We have
                Clients All over the world.
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacts</FooterLinkTitle>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                <h4>
                  <GoLocation />
                  Address:
                </h4>
                8th cross, Neeladri Nagar, Electronic City phase 1, Bangalore
                560100, INDIA
              </FooterLink>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                <h4>
                  <AiOutlineMail />
                  Email:
                </h4>
                contact@zetamonk.com
              </FooterLink>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                <h4>
                  <BiPhone />
                  Phone:
                </h4>
                +91 9540424976
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/about">
                <FaPushed />
                About us
              </FooterLink>
              <FooterLink to="/about">
                {" "}
                <FaPushed />
                What We Do
              </FooterLink>
              <FooterLink to="/about">
                {" "}
                <FaPushed />
                Who We Are
              </FooterLink>
              <FooterLink to="/contactus">
                {" "}
                <FaHeadset />
                Contact Us
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/webdev">
                <FaBuffer />
                Web Development
              </FooterLink>
              <FooterLink to="/chatbot">
                <FaComment />
                Chatbot Development
              </FooterLink>
              <FooterLink to="/schoolmanage">
                <FaBuffer />
                UI/UX Design
              </FooterLink>
              <FooterLink to="/mobile">
                <FaBuffer />
                Mobile Development
              </FooterLink>
              <FooterLink to="/digitalmarket">
                <FaSkyatlas />
                Digital Marketing
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Have Quetions?</FooterLinkTitle>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                <GiUsaFlag />
                <span>USA</span> +1 601-463-5923{" "}
              </FooterLink>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                {" "}
                <FaPushed />
                <span>Netherland</span>+31 687-547-785
              </FooterLink>
              <FooterLink
                style={{
                  cursor: "text",
                  fontSize: "15px",
                  color: "currentColor",
                  textDecoration: "none",
                }}
              >
                {" "}
                <GiIndianPalace />
                <span>India</span>+91 954-042-4976
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img
                src={zetalogo}
                style={{ height: "50px", width: "50px" }}
              ></img>

              <span style={{ color: "#867AE9" }}>Zeta</span>
              <span style={{ color: "#E5D549", marginLeft: "5px" }}>Monk</span>
            </SocialLogo>
            <WebsiteRights>ZetaMonk © 2021</WebsiteRights>
            {/* <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/results?search_query=zetamonk'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons> */}
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>

      <IconContext.Provider value={{ color: "green", size: "420" }}>
        <ContactSecres show={show}>
          <Container>
            <ContactMain>
              <Contactgrid>
                <Contactfeedback>
                  <FeedbackThankyou>
                    Thankyou for considering{" "}
                    <span style={{ color: "#867AE9" }}>Zeta</span>
                    <span style={{ color: "#E5D549", marginLeft: "5px" }}>
                      Monk
                    </span>{" "}
                    for your project.
                  </FeedbackThankyou>
                  <Feedbackreply>
                    Your Request has been submitted we will get back to you soon
                    to give details on your project.
                  </Feedbackreply>
                  <Feedbackhome>
                    <Button1 to="/">
                      {" "}
                      <span style={{ color: "#867AE9" }}>Zeta</span>
                      <span style={{ color: "#E5D549", marginLeft: "5px" }}>
                        Monk
                      </span>
                      .com
                    </Button1>
                  </Feedbackhome>
                </Contactfeedback>

                <Feedbacklogo>
                  <FaCheckCircle></FaCheckCircle>
                </Feedbacklogo>
              </Contactgrid>
            </ContactMain>
          </Container>
        </ContactSecres>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
