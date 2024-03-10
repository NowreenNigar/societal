import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import store from '../store';


function signIn(){
    let navigate = useNavigate();
  function handleClick() {
    navigate("/landingpage");
  }
 
    
        return ( 
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        
                        <input className="input" type="text" placeholder="Email Address" />
                    </div>
                    <div className="input-wrapper">
                      <input className="input" type="password" placeholder="Password" />
                    </div>
            
                    <div className="btn" onClick={() => handleClick() }>Sign in</div> 
                </div> 
            </div>
        )
}
export default  signIn;