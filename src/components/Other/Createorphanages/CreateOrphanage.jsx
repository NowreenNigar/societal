import React, { Component } from 'react';
import './CreateOrphange.css'
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      message: '',
      goal:'',
      concept:''
    
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  register =()=>{
    axios.post('/api/orphanges/create',{name: this.state.name,address: this.state.address, message: this.state.message,goal: this.state.goal, concept:this.state.concept}).then(res=>{
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
    <div className="create-quiz-wrapper">
               <div>
                   <Sidebar />
               </div>

               <div className="main">
                   <div className="header"><h2 >REGISTER ORPHANAGE</h2></div>
                   <div className="form card">
                       <input className="input" onChange={e => this.setState({name: e.target.value})} value={this.state.name} placeholder=" Orphanage Name" />
                     
                       <input className="input" onChange={e => this.setState({address: e.target.value})} value={this.state.address} placeholder=" Orphanage Address" />
                       <input className="input" onChange={e => this.setState({goal: e.target.value})} value={this.state.goal} placeholder=" Orphanage Goal" />
                       <input className="input" onChange={e => this.setState({concept: e.target.value})} value={this.state.concept} placeholder="concept" />
                   
                       <input className="input" onChange={e => this.setState({message: e.target.value})} value={this.state.message} placeholder="Message" />
                    
                       <div className="questions">
                           <button  onClick={this.register}>Register</button>
                       </div>
                   </div>
               </div>
           </div>
           <footer>
      <section className="ways-to-help">
          <h2 className='to'>Ways to Help</h2>
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
