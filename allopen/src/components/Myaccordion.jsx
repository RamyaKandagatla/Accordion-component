import React,{useState} from "react";
import './Myaccordion.css'

const Myaccordion= ({question,answer}) =>{
    const[show,setShow]=useState(true)
    
    return(
        <>
        
                <div className="main-content">
                    <div className="questions">
                        
                        <h1>{question}</h1>
                        <p className="toggle" onClick={()=> {setShow(!show)} }>{ show ? "-" : "+"}</p>
                    </div>
                    <div className="answers" >
                        {show && <p >{answer}</p>}
                    </div>

                </div>
        
        
        </>
    )
}

export default Myaccordion;