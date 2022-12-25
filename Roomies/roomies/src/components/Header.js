import React, { Component } from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import { Route } from 'react-router-dom';
import Home from './Home';

class  Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            cities : [],
            user : '',
        };
    }

    componentDidMount(){
        this.fetchCity();
        const user = localStorage.getItem("roomy_info")
        this.setState({user})
    }
    
    fetchCity=()=>{
        axios.get("http://localhost:8080/property/city")
        .then(response  => response.data)
        .then((data)=>{
            console.log(data);
            this.setState({cities : data});
        });
    }
   handleLogin=()=>{
       <Route path="/" component={Home}></Route>
   }
   handleLogout=()=>{
       localStorage.removeItem("roomy_info");
   }
    render(){
        const {cities,user} = this.state;

    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src="./images/roomieslogo.jpg" alt="" width="100%" height="100%"/> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/Aboutus">AboutUs</a>
                            </li>
                            <li class="nav-item">
                            <a className="nav-link" href="/Contact">ContactUs</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cities
                            </a>
                            {/* render remaining */}
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                                {
                                    //discuss

                                    cities.map((city)=>{
                                        <li key={city}><a class="dropdown-item" href="/catalogue" value={city}>{city}</a></li>
                                    })
                                    // cities.map((city)=>(
                                    //     <li key={cities.id}><a class="dropdown-item" href="/catalogue" value={city.value}  >{city.value}</a></li>
                                        
                                    //     ))  
                                    
                                    
                                }
                                {/* <li><a class="dropdown-item" href="/catalogue" value={pune} onChange={this.userChange} >Pune</a></li>
                                <li><a class="dropdown-item" href="/catalogue" value={mumbai} onChange={this.userChange} onClick={()=>{
                                    localStorage.setItem("city",JSON.stringify("mumbai"));
                                }}>Mumbai</a></li>
                                <li><a class="dropdown-item" href="/catalogue" value={nagpur} onChange={this.userChange} onClick={()=>{
                                    localStorage.setItem("city",JSON.stringify("nagpur"));
                                }}>Nagpur</a></li>
                                <li><a class="dropdown-item" href="/catalogue" value={kolhapur} onChange={this.userChange} onClick={()=>{
                                    localStorage.setItem("city",JSON.stringify("kolhapur"));
                                }}>Kolhapur</a></li>
                                <li><a class="dropdown-item" href="/catalogue" value={aurangabad} onChange={this.userChange} onClick={()=>{
                                    localStorage.setItem("city",JSON.stringify("aurangabad"));
                                }}>Aurangabad</a></li> */}   
                            </ul>
                            </li> 
                        </ul>
                        <form class="d-flex">
                            <input class="px-2 search" type="search" placeholder="  Search" aria-label="Search"/>
                            <button class="btn2" type="submit"><SearchIcon className="header_searchIcon" /></button>
                        </form>

                            {

                                user ? 
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item1 text-center">
                                <a class="nav-link" href="/AddProperty">Add Property</a>
                              </li>
                              <li class="nav-item2">
                                <a className="nav-link" href="/Logout" onClick={this.handleLogout}>LogOut</a>
                              </li> 
                              </ul>
                                :
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                               <li class="nav-item1">
                                    <a class="nav-link" href="/Login" onClick={this.handleLogin}>Login</a>
                                </li>
                            </ul>

                            }
                            
                           

            
                    </div>
                </div>
            </nav>
        </div>
    )
    }
}

export default Header
