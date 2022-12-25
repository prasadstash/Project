import React from "react";
import "./Profile.css";
//import rahilpic from "../images/rahil.JPG";
const Profile = () =>{
    return (
        <>
            <div className="container user-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                               
                                <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Qazi Rahil</h5>
                                <h6>web Devloper</h6>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">About</a>
                                        
                                    </li>
                                    <li className="nav-item">
                                       <a class="nav-link" href="#">Link</a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit profile" />
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                        
                                </div>
                            </div>
                            
                            <div className="col-md-8 pl-5 about-info">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <label>User Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Qazi Rahil</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Email-ID</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>kazirahil07@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Mobile-No</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>8329465952</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Software Engineer</p>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="tab-pane fade" id="property" role="tabpanel" aria-labelledby="property-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Property Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Aashiyana Society</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Adress</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Silver Park,Akurdi,Pune 424301</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Flat type</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>2BHK</p>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <label>Amenities</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>WiFi,AC,Washing machine,24hr water,water purifier</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </>
    )

}

export default Profile;