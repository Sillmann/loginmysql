import React, { useState } from 'react';
import { DoLogin } from '../Authservice';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';
import './styles.css';
import {FiSmile} from 'react-icons/fi';

export default function Login() {

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const data = {
      email,
      password
    } 
  


    try {
      const response = await Axios.post("http://localhost:3333/loginmysql/isvalid",{
        email: email,
        password: password,
      });
      
      localStorage.setItem('loginId',response.data[0].id);
      localStorage.setItem('emailId',response.data[0].email);
      
      //.then((response)=>{

        navigate("/setting");
        //console.log(response.data[0].id);

        // if (response.data[0].id > 0)
        //   navigate("/setting")
        // else  
        //   navigate("/menu");
        
        //setId(databack.databack[0].id);

        // console.log('certo');
        // console.log(dt.data[0].id);
        // console.log(dt.data[0].email);

        // setId(dt.data[0].id);

        // console.log(id);

        // if ( id !== '' ) {
        // navigate("/setting");
        // } else {
        // navigate("/login");
        // }

     // });
    } catch (err) {
       //console.log('nao leu');
       //console.log(err);
       navigate("/menu");       
    }  

    // if ( email !== '' ) {
    //   navigate("/setting");
    // } else {
    //   navigate("/login");
    // }

    // const IsValid = DoLogin(email,password);
    // if ( IsValid ) {
    //   navigate("/menu");
    // }

  }

  return (

<div className="container">

<aside className="aside">
  
  <p><FiSmile size="1rem" color="yellow"/>ssillmann</p>
  <span>Log in to the platform</span>
</aside>

<main className="main">
  
  <form onSubmit={handleLogin}>
      
    <div className="mainForm">

      <input 
        className="inputEmail"
        type="email" 
        placeholder="email" 
        onChange={e => setEmail(e.target.value)}
      />

      <input 
        className="inputPassword"
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />

      <a href="/"
        className="forgotPassword">
        i forgot my password
      </a>

      <button 
        className="buttonForm"
        type="submit"
      >LOGIN</button>

      <div 
        className="register">
        <p>I don't have an account! <a href="/" className="registerAcount">
          Register
        </a>  </p>
        
      </div>

    </div>

  </form>

</main>



</div>      

    
  )
};