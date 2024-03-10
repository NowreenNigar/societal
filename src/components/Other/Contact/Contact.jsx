import React, { Component } from 'react';
import './Contact.css'
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      message: '',
      address: '',
      phonenumber:''
    };
  }

  done = () => { 
    axios.post('/api/contact/create',{firstName: this.state.firstName,address: this.state.address, message: this.state.message,email: this.state.email, phonenumber:this.state.phonenumber}).then(res=>{
      console.log(res.data)
  }).catch(er=>{console.log(er.response.data)})
  console.log(this.state.name)
  console.log(this.state.address)
  this.setState({title: '', content: ''})
  window.location.reload(true);
  }

  render() {
    return (
    <>
    <div className="wrapper">
               <div>
                   <Sidebar />
               </div>
               <div className="main">
                   <div className="header"><h2 >CONTACT</h2></div>
                   <div className="form card">
                       <input className="input" onChange={e => this.setState({firstName: e.target.value})} value={this.state.firstName} placeholder="Name" />
                     
                       <input className="input" onChange={e => this.setState({phonenumber: e.target.value})} value={this.state.phonenumber} placeholder=" Phone number" />
                       <input className="input" onChange={e => this.setState({address: e.target.value})} value={this.state.address} placeholder="Address" />
                       <input className="input" onChange={e => this.setState({email: e.target.value})} value={this.state.email} placeholder="email" />
                   
                       <input className="input" onChange={e => this.setState({message: e.target.value})} value={this.state.message} placeholder="Message" />
                    
                       <div className="questions">
                           <button  onClick={this.done}>Done</button>
                       </div>
                   </div>
               </div>
           </div>
           <footer>
      <section className="ways-to-help">
          <h2 className='help'>Ways to Help</h2>
          <ul>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Sponsor a child</li>
            <li>Spread the word</li>
          </ul>
        </section>
        <p>&copy; 2024 HOPE HAVEN</p>
        <a href="#">Contact Us</a>
      </footer>
      </>
    );
  }
}

export default ContactForm;
