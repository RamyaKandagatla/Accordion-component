import React from 'react';
import { useState } from 'react';
import './accordion.css'

export default function Accordion({answer,question}) {
    const [Open,setOpen]=useState(false)
    return (
      <div className="item">
        <div
          className="title"
          onClick={() => {
            setOpen(!Open);
          }}
        >
          <div>{question}</div>
          {!Open ? '-':'+'
            
          }
        </div>
        {Open ? <div className='content'>{answer}</div> : <div></div>}
      </div>
    );
}