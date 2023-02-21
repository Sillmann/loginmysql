import React, { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login</h1>
      <p></p>

      <form onSubmit={()=>{}}>
          
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