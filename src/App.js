import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
   // let email="piotr.jarmosz@o2.pl";
const [email, setEmail] = useState('');

    function handleChange(event){
       setEmail(event.target.value);}

       let message;
       if (email.length<5){
           message= 'Za krótki adres';
       }else if(email.length>15){
            message=' Za długi adres';
        }else {
           message='Sredni adres';

    }



  return (
      <div>

        <h1>System do zapisów na zajęcia</h1>
        <h2>Twój e-mail to {email}</h2>
          <div>{message}</div>
          <input type="text"onChange={handleChange}/>

      </div>
  );
}

export default App;
