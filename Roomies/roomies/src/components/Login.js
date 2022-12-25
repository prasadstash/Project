import React, { Component } from "react";
import { Grid, Paper, Avatar, TextField,Button,Typography,Link} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import {Form} from 'react-bootstrap';
// import { hashHistory } from 'react-router'
import {withRouter} from 'react-router-dom'


import createBrowserHistory from 'history/createBrowserHistory';
import Catelog from "./Catalogue";
import Home from "./Home";

// const history = createBrowserHistory();

class Login extends Component{

  constructor(props){
    super(props);
    //  this.state = this.initialState;
    this.state = {
      username:'',password:''
  }
  this.saveUser = this.saveUser.bind(this);
}
// onChoice=()=>{
//     return this.props.history.push("/choice");
// }
// initialState = {
//     username:'',password:''
// }


userChange=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

saveUser(event){
     event.preventDefault();
    const roomy = {
        username:this.state.username,
        password:this.state.password,
    };
  axios.post("http://localhost:8080/roomy/login",roomy).then(response=>{
        if(response.data != null){
            localStorage.setItem("roomy_id",response.data.roomyid);

            console.log(roomy);
            alert("Login successful");
            // this.props.history.push('/');
            localStorage.setItem("roomy_info",JSON.stringify(this.state))
            this.setState(this.state);
          }else{
           alert("Incorrect username or password");
          }
      })
    // }).catch((error)=>{
    //   alert("Incorrect username or password");

    // })

  
}


  render(){
    const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:"pink"}
    const btnstyle={margin:'8px 0'}
    const {username,password} = this.state;

     return(
            <div className="login">
              <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align="center">
                             <Avatar style={avatarStyle}> < LockOutlinedIcon/></Avatar>
                             <h2>Sign In</h2>
                        </Grid>
                    <Form onSubmit={this.saveUser}>
                        <TextField label='Username' name="username" id="username" value={username} onChange={this.userChange} placeholder='Enter username' fullWidth required/>
                        <TextField label='Password'name="password" id="password" value={password} onChange={this.userChange} placeholder='Enter password' type='password' fullWidth required/>
                        
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={
                          ()=>{
                            
                          }
                        }  fullWidth>
                                      
                                      Sign in                          

                          </Button>
                        <Typography >
                                    <Link href="#" className="Signin_Link">
                                           Forgot password ?
                                     </Link>
                        </Typography>
                        <Typography > Do you have an account ?
                                    <Link href="registration" className="SigninLink_lineTwo">
                                            Register Here
                                    </Link>
                         </Typography>
                      </Form>

                    </Paper>
              </Grid>
            </div>
     )
  }
}

export default Login;