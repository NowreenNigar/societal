import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }
    signUp = ({firstName, lastName, email, password}) => {
        console.log(firstName,lastName,email,password)
        axios.post('api/users/register',{firstName, lastName, email,password}).then(res =>{
            if(res.data.success){
                this.setState({tab:'signin'})
            }
        }).catch(er =>{
            console.log(er)
        })
    }

    render() {
        return (
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        
                        <input className="input" type="text" placeholder="Email Address" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="input-wrapper">
                     
                      <input className="input" type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    </div>

                    <div className="input-wrapper">
                        
                        <input className="input" type="text" placeholder="First Name" value={this.state.firstName} onChange={ e => this.setState({ firstName: e.target.value }) } />
                    </div>
                    <div className="input-wrapper">
                      
                      <input className="input" type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} />
                    </div>
            
                    <div className="btn" onClick={() => this.signUp({...this.state})}>Sign Up</div> 
                </div> 
            </div>
        )
    }
}