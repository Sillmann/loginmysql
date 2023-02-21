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