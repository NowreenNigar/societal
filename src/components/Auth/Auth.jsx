import React from "react";
import Signin from "./signIn";
import Signup from "./signup";
import './Auth.css'
import axios from "axios";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'signin'
        }
    }
    changeTab = () =>{
        this.setState({
            tab: this.state.tab === 'signup' ? 'signin' : 'signup'
        })
    }
    signUp = ({firstName, lastName, email, password}) => {
        console.log(firstName,lastName,email,password)
    }
    signIn = (email, password) => {
        console.log(email + " " + password)
        
    } 

    render() {
        let page = this.state.tab === 'signin' ? <Signin signin={this.signin} /> : <Signup signup={this.signup} />
        return (
            <div className="auth-wrapper">
                <div className="left">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-orphan-1682574-1429938.png?f=webp&w=512" alt=''/>
                </div>

                <div className="right">
                    <div className="header">HOPE HAVEN</div>
                    <div className="sub-header">Welcome</div>
                    {page}
                    <div className="new" onClick={this.changeTab}>{this.state.tab === 'signin' ? 'New to Quiz itt? Sign up here' : 'Already have an account with us? Sign in'}</div>
                </div>
            </div>
        )
    }


}
export default Auth