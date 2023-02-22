1. npx create-react-app loginmysql

structure
src\App.js
import React from 'react';
export default function Listall() {
  return (
      <h1>--ListALL--</h1>
  )
};
npm start

2.
src\loginmysql\pages\Login\index.js
import React from 'react';

export default function Login() {
  return (
    <h1>Login</h1>
  )
};

3. npm install react-router-dom

App.js
------
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './loginmysql/pages/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;


http://localhost:3000/login
Login


4. src/loginmysql/pages/Login
import React, { useState } from 'react';
import { DoLogin } from '../Authservice';
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const IsValid = DoLogin(email,password);
    if ( IsValid ) {
      navigate("/menu");
    }

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