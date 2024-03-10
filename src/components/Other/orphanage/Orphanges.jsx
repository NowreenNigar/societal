import React from "react";
import axios from 'axios';
import './orphanage.css'
import Sidebar from "../Sidebar/Sidebar";



export default class Orphanges extends React.Component {
        constructor(props){
        super(props)
        this.state ={
            orphanage:[]
        }
    }
    
    componentDidMount(){
        axios.get('/api/orphanges/get-orphanage').then(res=>{
            console.log(res.data)
           this.setState({
               orphanage: res.data
            })
        }).catch(er => { console.log(er.response.status) })

    }
    donate =()=>{
        alert('Donation  Successful!') 
    }
    render(){
        return(
            <> 
            <div className="wrap">
                <div>
            <Sidebar/></div>
            <div className="bottom">
            <div className="card-container">
                {this.state.orphanage.map((orphanage,idx)=>(
                    <div key={idx} className='card'>
                        <div className="card-header">{orphanage.name}</div>
                        <div className="card-body">{orphanage.address}</div>
                        <div className="card-body">{orphanage.goal}</div>
                        <div className="card-body">{orphanage.message}</div>
                        <div className="card-body">{orphanage.concept}</div>
                        <button onClick={this.donate}>Donate</button>
                    </div>
                    
                ))}</div>
            </div>
            </div>
            </>
        )
    }
}