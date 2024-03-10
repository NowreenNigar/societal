import React from "react";
import axios from 'axios';
import './admin.css'
import Sidebar from "../Sidebar/Sidebar";



export default class Orphanges extends React.Component {
        constructor(props){
        super(props)
        this.state ={
            contact:[]
        }
    }
    
    componentDidMount(){
        axios.get('/api/contact/get-contact').then(res=>{
            console.log(res.data)
           this.setState({
               contact: res.data
            })
        }).catch(er => { console.log(er.response.status) })

    }
    delete = ()=>{
        alert('upcoming feature')
    }
    
    render(){
        return(
            <> 
            <div className="wrap">
                <div>
            <Sidebar/></div>
            <div className="bottom">
            <div className="card-container">
                {this.state.contact.map((contact,idx)=>(
                    <div key={idx} className='card'>
                        <div className="card-header">{contact.firstname}</div>
                        <div className="card-body">{contact.address}</div>
                        <div className="card-body">{contact.email}</div>
                        <div className="card-body">{contact.message}</div>
                        <div className="card-body">{contact.phonenumber}</div>
                        <div><img onClick={() => this.delete()}src="https://img.icons8.com/ios/256/trash--v1.png"></img></div>
                    </div>
                    
                ))}</div>
            </div>
            </div>
            </>
        )
    }
}