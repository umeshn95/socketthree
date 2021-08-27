import { Data } from "./Data"
import React,{useState,useEffect} from 'react';
import { Subgrid, SuperSubgrid } from "./Counteranimation.element";
import './Counteranimation.css'
function Component(props) {



    return (
        <Subgrid>
           <SuperSubgrid>
                <div className='state' >{props.state}</div>
                <div className='customer'>{props.customer}</div>

                </SuperSubgrid>
  
<div className='meter' >
   {props.svi}
</div>
            
        </Subgrid>
       
    )
}

export default Component
