
import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import 'date-fns';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios';
class Registration extends React.Component{
    
    constructor(props){
        super(props);
        this.state = this.initialState;
    }
    
    initialState = {
        first_name:'' , 
        last_name:'',
        email:'', 
        gender:'',
        contact:'',
        username:'',
        password:'',
        veg_nonveg:'',
         noalcohol:'', 
         smoker:'', 
         wanderer:'',
         fitness_freak:'', 
         age:'',
         occupation:''
    }

    userChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    saveUser=(event)=>{
        event.preventDefault();
        const roomy = {
            first_name: this.state.first_name , 
            last_name:this.state.last_name,
            email:this.state.email, 
            gender:this.state.gender,
            contact:this.state.contact,
            username:this.state.username,
            password:this.state.password,
            veg_nonveg:this.state.veg_nonveg,
             noalcohol:this.state.noalcohol, 
             smoker:this.state.smoker, 
             wanderer:this.state.wanderer,
             fitness_freak:this.state.fitness_freak, 
             age:this.state.age,
             occupation:this.state.occupation

        };
        console.log(roomy);
        axios.post("http://localhost:8080/addroomy",roomy).then(response=>{
            if(response.data != null){
                this.setState(this.initialState);
                alert("Register successful");
            }
        })
    }




    render(){
    const paperStyle = { padding: '30px 20px', width: 400, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const {first_name , last_name,email, gender,contact,username,password, veg_nonveg, noalcohol, smoker, wanderer,fitness_freak, age,occupation} = this.state;
    
    return (
        <Grid >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'width='w-500'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={this.saveUser}>
                    <TextField fullWidth label='First Name' name="first_name" id="first_name" value={first_name} onChange={this.userChange} placeholder="Enter First name" />
                    <TextField fullWidth label='Last Name' name="last_name" id="last_name"  value={last_name} onChange={this.userChange} placeholder="Enter Last name" />
                    <TextField fullWidth label='Email' name="email" id="email"   value={email} onChange={this.userChange} placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" id="gender"  value={gender} onChange={this.userChange} style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' name="contact" id="contact"  value={contact} onChange={this.userChange} placeholder="Enter your phone number" />
                    <TextField fullWidth label='Username' name="username" id="username"  value={username} onChange={this.userChange} placeholder="Enter Username" />
                    <TextField fullWidth label='Password' type="password" name="password" id="password"  value={password} onChange={this.userChange} placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password'onChange={this.userChange} placeholder="Confirm your password"/>
                
                 <div className="spacing my-10">          
            <FormLabel component="legend">Veg</FormLabel>
              <RadioGroup aria-label="Veg/Non-Veg" name="veg_nonveg"  id="veg_nonveg"  value={veg_nonveg} onChange={this.userChange} style={{ display: 'initial' }}>
                 <FormControlLabel value="true" control={<Radio />} label="Yes" />
                 <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
              </div>
               <div className="spacing my-10">
               <FormLabel component="legend">Non-Alcolholic</FormLabel>
              <RadioGroup aria-label="Alcoholic/Non-Alcolholic" name="noalcohol" id="noalcohol" onChange={this.userChange} value={noalcohol} style={{ display: 'initial' }}>
                 <FormControlLabel value="true" control={<Radio />} label="Yes" />
                 <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
             
               </div>
               <div>
               <FormLabel component="legend">No-Smoking</FormLabel>
              <RadioGroup aria-label="Smoking/Non-Smoking" name="smoker" id="smoker" onChange={this.userChange} value={smoker} style={{ display: 'initial' }}>
                 <FormControlLabel value="true" control={<Radio />} label="Yes" />
                 <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
               </div>
               <div>
               <FormLabel component="legend">Wanderer</FormLabel>
              <RadioGroup aria-label="Wanderer" name="wanderer" id="wanderer"  value={wanderer} onChange={this.userChange} style={{ display: 'initial' }}>
                 <FormControlLabel value="true" control={<Radio />} label="Yes" />
                 <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
               </div>
               <div>
               <FormLabel component="legend">Fitness Freak</FormLabel>
              <RadioGroup aria-label="Fitness Freak" name="fitness_freak" id="fitness_freak" onChange={this.userChange} value={fitness_freak} style={{ display: 'initial' }}>
                 <FormControlLabel value="true" control={<Radio />} label="Yes" />
                 <FormControlLabel value="false" control={<Radio />} label="No" />
              </RadioGroup>
               </div>

                     <TextField fullWidth label='Age' name="age" id="age"  value={age} onChange={this.userChange} placeholder="Enter your Age" />
                     <TextField fullWidth label='Occupation' name="occupation" id="occupation"  value={occupation} onChange={this.userChange} placeholder="Enter your Occupation" />
               <div label="Image">
                   <label for="inputImage" class="form-label ">Image</label>
                </div>
                <div>
                   <input label="Image"type="file" name="Image"  />
               </div>


               <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
               />

               <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
    }
}

export default Registration;
