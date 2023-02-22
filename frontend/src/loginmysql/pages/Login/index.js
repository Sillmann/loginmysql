import React, { useState } from 'react';
import { DoLogin } from '../Authservice';
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';

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
  
    console.log(data);

    try {
      await Axios.post("http://localhost:3333/loginmysql/isvalid",{
        email: email,
        password: password,
      }).then((dt)=>{

        navigate("/setting");
        
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

      });
    } catch (err) {
       console.log('nao leu');
       console.log(err);
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
    <div>
      <h1>Login</h1>
      <p></p>

      <form onSubmit={handleLogin}>
          
          <input 
            type="email" 
            placeholder="email" 
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />

        <button type="submit">Login</button>

      </form>


    </div>
  )
};