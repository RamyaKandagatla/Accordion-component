import {useState} from 'react' ;
import './App.css';


function App() {
  const[show,setShow] = useState(false);
  return (
    <div className='wrapper'>
      <div className='accordion'>
      {data.map((item,i)=>(
        <div className='item'>
          <div className='title'>
            <h2>{item.question}</h2>
            <span onClick={()=>setShow(!show)}>{ show ? "-":"+"}</span>
          </div>
          <div className='content'>{show && <p>{item.answer}</p>}</div>
          
        </div>
      
      )

      )}

      </div>
    </div>
  );
}

const data=[
  {
      question:'what is hoisting ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'semantic tags ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'settimeout with var and let ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'ES6 new features ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'HTML CSS Frameworks ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },
  {
      question:'stash in git ? ',
      answer:'Lorem ipsum dolor sit amet. Non quia quaerat est similique molestias id error quia ad corrupti nihil 33 quaerat dolor. Qui quidem numquam ex eligendi repudiandae ut atque enim et natus corrupti qui vitae eaque At neque veritatis ut magnam molestias. Et dolor non sint quidem nam tenetur nulla sit quas perspiciatis ea asperiores veritatis est optio consequatur!'
  },

];

export default App;
