import React from 'react'


function Aboutus() {
    return (
        <div className="about">
            <div className="about_heading my-3">
                <h1 className="fs-bold text-center" >About us</h1>
                <hr />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <figure>
                           <img src="images/about.jpg" className="img-fluid img-thumbnail" alt="" />
                        </figure>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <h3>About Rommies</h3>
                        <p className="lh-base">
                        Roomies is an application that helps users easily find a roommate 
                        either in their new location or current location. The target 
                        audience is students, corp members, and young professionals.
                        </p>

                        <p className="lh-base">
                        Rommies application makes finding an apartment in your preferred location and
                        finding a roommate of your choice easy. With the application, it is easy
                        to find people who have an apartment that suits your budget.
                        </p>
                    </div>  

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <h3>Our Mission</h3>  
                        <p className="lh-base">
                        Design a product experience that makes it safe to
                        find the ideal roommate in a new city.
                        Design the experience from 
                        the perspective of a person looking for a roommate and the one who is 
                        looking for an apartment.   
                        </p>

                        <p className="lh-base">
                          Roomies is a friendly and resourceful solution to find a room
                          in a shared accommodation with people you will be comfortable to
                          live with. Define your search criterions, then tell us about your 
                          hobbies and we will show you matching ads. More than finding a room 
                          you will like, find people you’ll love to live with. Because feeling 
                          comfortable and having a good time at home is all about finding the right mix 
                          of roommates' personalities.
                        </p>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <figure >
                           <img src="images/about2.jpg"  className="img-fluid img-thumbnail" alt="" />
                        </figure>
                    </div> 
                </div>
            </div>
        </div>       
    )
}

export default Aboutus
