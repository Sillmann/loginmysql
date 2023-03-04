import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Setting() {

  const loginId = localStorage.getItem('loginId');
  const emailId = localStorage.getItem('emailId');

  return(
    <div>
    <h1>Setting</h1>
    <h1>id:{loginId}</h1>
    <h1>email:{emailId}</h1>
    </div>
  )
}
