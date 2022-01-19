import React from 'react' ;
import './App.css';

import Accordion from './components/accordion';


function App() {
  
  
  return (
    <div className='wrapper'>
      <div className='accordion'>
      {data.map((item,i)=>{
        const {question,answer}=item;
        return <Accordion answer={answer} question={question}/>
      
  }

      )}

      </div>
    </div>
  );
}


const data=[
  {
      question:'Question1? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'Question2? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'question3? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'question4? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'question5? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'question6? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },

];

export default App;
