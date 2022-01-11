import React from 'react';
import {data} from './data';
import './Accordion.css';
import Myaccordion from './Myaccordion';
import './Myaccordion.css'

const Accordion=()=>{

    return(
        <>
        
            <div className='main'>
            {data.map((item,index)=>{
                
                return (<Myaccordion key={index} {...item}/>
                    );

            })
            };
            </div>
        </>

    );
}

export default Accordion;