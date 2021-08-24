import styled from "styled-components";
import { motion } from "framer-motion";


export const Main = styled.div`
font-family: 'Arvo', serif;
margin-bottom:200px!important;
color:white;
padding:0;
box-size:border-box;
background:#6135A1;
height:300px;
width:100%;
top:350px;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
z-index:-1;
display:none;

    }
  }
`;
export const MainGrid = styled.div`
padding:90px 100px 50px 100px;

display:grid;
grid-template-columns: 1fr 1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;
export const Subgrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

svg{
  height:550px;
  width:550px;
}

@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;
export const SuperSubgrid = styled.div`
display:grid;
grid-template-rows: 0.5fr 1fr 0.5fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;

