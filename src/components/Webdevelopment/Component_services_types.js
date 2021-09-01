import React from "react";
import {

  Description,
  Headc, TwoRowGrid,
 
} from "./Webdevelopment.element";

function Component_services_types(props) {
  return (
    <TwoRowGrid style={{border:'1px solid rgba(0,0,0,0.3)', borderRadius:'5px'}} >
          <Headc style={{textAlign:'center'}}>

      {props.head}
      </Headc>
      <Description style={{textAlign:'center'}}>

      {props.description}
      </Description>
    </TwoRowGrid>
  );
}

export default Component_services_types;
