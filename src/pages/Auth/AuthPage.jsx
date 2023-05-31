import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export default function AuthPage({ setUser }) {

  const [showLogin, setShowLogin] = useState(false);
  const [linkValue, setLinkValue] = useState("SIGN UP");

  const changePage = function () {
    //toggle true/false
  }

  return (
    <main className="AuthPage"><h1>Auth Page</h1>
      <div> 
        <h3 onClick={() => { setShowLogin(!showLogin) }} style={{ 'cursor': 'pointer', 'width': 'fit-content' }}>
          {showLogin ? "LOG IN" : "SIGN UP"}
        </h3>
      </div>

      {showLogin ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  )
}

