import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

let[Cast,SetCast] = useState([]);

let getDevaraCast = async ()=>{
  let reqOption = {
    method:"Get",
  };

 let JSONData = await fetch("http://localhost:2222/devaraCast", reqOption);
 let JSOData = await JSONData.json();

 SetCast(JSOData);
 console.log(JSOData);
};

let getKalkiCast = async ()=>{
  let reqOption = {
    method:"Get",
  };

 let JSONData = await fetch("http://localhost:2222/kalkiCast", reqOption);
 let JSOData = await JSONData.json();

 SetCast(JSOData);
 console.log(JSOData);
};

  return (
    <div className="App">
      <button onClick ={()=>{
        getDevaraCast();
      }}
      >
       Get Devara Cast 
       </button>
       
       <button onClick ={()=>{
        getKalkiCast();
      }}
      >
       Get Kalki Cast 
       </button>


      {Cast.map((ele,i)=>{
        return <h2>{ele}</h2>;
      })}
    </div>
  );
}

export default App;
