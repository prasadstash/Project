import axios from 'axios';
import React, {Component, useState} from 'react'
import './AddProperty.css';
import Image from './Image';
import PropertyService from '../service/PropertyService';
import RoomyService from '../service/RoomyService';


export class AddProperty extends Component{

    constructor(props){
        super(props);
        this.state = this.initialState;
    }
    initialState = {
        pid:"",
        area:"",
        furnished_status:"",
         maintenance:"", 
         available_from:"",
          bhk:"", 
          city:"", 
          state:"",
          description:"", 
          society_name:"",
          flat_no:"", 
          gender:"", 
          no_of_seats:"", 
          p_name:"", 
          pincode:"", 
          price:"",
          water:"",
          wifi:"",
          tv:"",
          washing_machine:""
    }
    userChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    saveProp=(event)=>{
        event.preventDefault();
        const property = {
            area:this.state.area,
            furnished_status:this.state.furnished_status,
            maintenance:this.state.maintenance, 
            available_from:this.state.available_from,
            bhk:this.state.bhk, 
            city:this.state.city, 
            state:this.state.state, 
            description:this.state.description,
            society_name:this.state.society_name, 
            flat_no:this.state.flat_no, 
            gender:this.state.gender, 
            no_of_seats:this.state.no_of_seats, 
            p_name:this.state.p_name, 
            pincode:this.state.pincode, 
            price:this.state.price,
            water:this.state.water,
            wifi:this.state.wifi,
            tv:this.state.tv,
            washing_machine:this.state.washing_machine,
        }
        axios.post("http://localhost:8080/property",property).then(response=>{
            // let result =  response.data;
            if(response.data != null){
                // p=PropertyService.getId(this.state.flat_no,this.state.society_name);
                // console.log(response.data.pid);
                // localStorage.setItem("pid",response.data.pid);
                this.setState(this.initialState);
                alert("Property Added");
               let roomy = RoomyService.getById(localStorage.getItem("roomy_id"));
               // console.log(roomy);
                roomy.pid = response.data.pid;
                console.log(roomy);
                // RoomyService.updateById(roomy);

            }
        })
    }
    render(){

        const {area,furnished_status, maintenance, available_from, bhk, city,society_name, description, flat_no, gender, no_of_seats, p_name, pincode,state, price,water,wifi,tv,washing_machine} = this.state;

   
        return (
            <div className="addProperty">
                <div className="heading my-3">
                    <h1 className="fs-bold text-center">Add Property</h1>
                    <hr />

                    <div className="container border border-dark">    
                        <section className="panel panel-default">
                            <div className="panel-heading text-center"> 
                                <h3 className="panel-title my-3">Add Your Property For Rent</h3> 
                                <hr/>
                            </div> 

                            <form onSubmit={this.saveProp}>
                                <div className="mb-3 col-lg-4">
                                    <label for="inputArea" className="form-label fw-normal fs-5">Area</label>
                                    <input type="text" className="form-control border border-dark" id="area" name="area" value={area} onChange={this.userChange} aria-describedby="areaHelp"/>
                                    <div id="area" className="form-text">Enter your area</div>
                                </div>

                                <div className="mb-3 col-lg-4">
                                    <label for="inputArea" className="form-label fw-normal fs-5">Society Name</label>
                                    <input type="text" className="form-control border border-dark" id="society_name" name="society_name" value={society_name} onChange={this.userChange} aria-describedby="areaHelp"/>
                                    <div id="area" className="form-text">Enter your area</div>
                                </div>
                                <div className="mb-3 col-lg-4">
                                    <label for="inputArea" className="form-label fw-normal fs-5">State</label>
                                    <input type="text" className="form-control border border-dark" id="state" name="state" value={state} onChange={this.userChange} aria-describedby="areaHelp"/>
                                    <div id="area" className="form-text">Enter your area</div>
                                </div>

                                <div class="my-4 col-lg-4">
                                    <label for="inputDate" className="form-label fw-normal fs-5">Available From</label>
                                    <input type="date" class="form-control border border-dark" id="available_from" name="available_from" onChange={this.userChange} value={available_from}/>
                                </div>

                                <div class=" my-4 col-lg-4">
                                    <label for="inputBhk" class="form-label fw-normal fs-5">BHK</label>
                                    <select class="form-select border border-dark" id="bhk" name="bhk" value={bhk} onChange={this.userChange} aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="3">Four</option>
                                        <option value="3">Five</option>
                                    </select>
                                </div>

                                <div class="my-4 col-lg-4">
                                    <label for="city" class="form-label fw-normal fs-5">City</label>
                                    <input type="text" class="form-control border border-dark" id="city" name="city" value={city} onChange={this.userChange} aria-describedby="city"/>
                                    <div id="city" class="form-text">Enter your city</div>
                                </div>

                                <div class="my-4 col-lg-4">
                                    <label for="inputDescp" class="form-label fw-normal fs-5">Description</label>
                                    <textarea class="form-control border border-dark" id="description" name="description" value={description} onChange={this.userChange} rows="3"  aria-describedby="descHelp" ></textarea>
                                    <div id="discription" class="form-text">Include condition, features and reason for selling</div>
                                </div>

                                <div class="my-4 col-lg-4">
                                <label for="inputPrice" className="form-label fw-normal fs-5">Flat No</label>
                                    <input type="number" className="form-control border border-dark" id="flat_no" name="flat_no" value={flat_no} onChange={this.userChange} />
                                </div>

                                <div className=" my-4 col-lg-4">
                                    <label for="inputSeats" class="form-label fw-normal fs-5">Furnished Status</label>
                                    <select className="form-select border border-dark" id="furnished_status" name="furnished_status" value={furnished_status} onChange={this.userChange} aria-label="Default select example">
                                        <option selected></option>
                                        <option value="furnished">Furnished</option>
                                        <option value="semifurnished">Semi-Furnished</option>
                                        <option value="unfurnished">Un-Furnished</option>
                                    </select>
                                </div>


                                <div class="my-4 col-lg-4">
                                    <label for="inputFlat" className="form-label fw-normal fs-5">Gender</label>
                                    <div name="gender" id="gender" value={gender} onChange={this.userChange}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="gender" value="male"/>
                                            <label className="form-check-label" for="inlineRadio1">male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="gender" id="gender" value="female"/>
                                            <label className="form-check-label" for="inlineRadio2">female</label>
                                        </div>
                                    </div>   
                                </div>

                                <div class="my-4 col-lg-4">
                                    <label for="inputAmount" className="form-label fw-normal fs-5">Maintenance Amount (Monthly)</label>
                                    <input type="number" className="form-control border border-dark" name="maintenance" id="maintenance" value={maintenance} onChange={this.userChange}/>
                                </div>

                                <div className=" my-4 col-lg-4">
                                    <label for="inputSeats" class="form-label fw-normal fs-5">Number of seats</label>
                                    <select className="form-select border border-dark" id="no_of_seats" name="no_of_seats" value={no_of_seats} onChange={this.userChange} aria-label="Default select example">
                                        <option selected></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4">Four</option>
                                    </select>
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputProp" className="form-label fw-normal fs-5">Property Name</label>
                                    <textarea className="form-control border border-dark" id="p_name" name="p_name" value={p_name} onChange={this.userChange} rows="3"></textarea>
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputPin" className="form-label fw-normal fs-5">Pin Code</label>
                                    <input type="number" className="form-control border border-dark" id="pincode" name="pincode" value={pincode} onChange={this.userChange} />
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputPrice" className="form-label fw-normal fs-5">Price</label>
                                    <input type="number" className="form-control border border-dark" id="price" name="price" value={price} onChange={this.userChange} />
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputTv" className="form-label fw-normal fs-5">TV</label>
                                    <div  name="tv" id="tv" value={tv} onChange={this.userChange}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="tv" id="tv"  value="true" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio1">yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input className="form-check-input" type="radio"  name="tv" id="tv" value="false" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio2">no</label>
                                        </div>
                                    </div>   
                                </div>

                                <div class="my-4 col-lg-4">
                                    <label for="inputWm" className="form-label fw-normal fs-5">Washing Machine</label>
                                    <div name="washing_machine" id="washing_machine" value={washing_machine} onChange={this.userChange}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="washing_machine" id="washing_machine" value="true" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="washing_machine" id="washing_machine" value="false" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio2">no</label>
                                        </div>
                                    </div>   
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputWater" className="form-label fw-normal fs-5">Water</label>
                                    <div name="water" id="water" value={water} onChange={this.userChange}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="water" id="water" value="true" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="water" id="water" value="false" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio2">no</label>
                                        </div>
                                    </div>   
                                </div>

                                <div className="my-4 col-lg-4">
                                    <label for="inputWf" className="form-label fw-normal fs-5">Wifi</label>
                                    <div name="wifi" id="wifi" value={wifi} onChange={this.userChange}>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="wifi" id="wifi" value="true" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio1">yes</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio"  name="wifi" id="wifi" value="false" onChange={this.userChange}/>
                                            <label className="form-check-label" for="inlineRadio2">no</label>
                                        </div>
                                    </div>   
                                </div>                         
                    
                                <div>
                                   <button type="submit" className="btn btn-primary ">Submit</button>
                                </div>
                                <hr/>
                            </form>

                                <form>
                                    <div className="my-4 col-lg-4">
                                        <label for="photo" className="form-label fw-normal fs-5">Upload Image</label>
                                        <Image/>
                                    </div>
                                </form>
                            


                        </section>
                    </div>   
                </div>
            </div>
        )
    }
}

export default AddProperty
