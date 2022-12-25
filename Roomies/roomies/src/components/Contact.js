import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className=" my-3">
                <h1 className="fs-bold text-center">Contact us</h1>
                <hr />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <p className="h4" >Pune (Head Office)</p>
                        <p className="h5">Address:</p>
                        <p className="lh-base">
                            DLF Building No. 5 Tower B
                            DLF Cyber City, DLF Phase 2 <br/>
                            123 Street Hinjewadi, Pune, Maharashtra, India
                        </p>

                        <p className="h5">Contact:</p>
                        <p className="lh-base">
                            (0121) 4628557 <br/>
                            (0121) 5045345 <br/>
                            (0121) 2898230
                        </p>

                        <p className="h5">Email:</p>
                        <p className="lh-base">
                           roomies@gamil.com
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <div className="text-center">
                           <img src="images/contact.jpg"  class="img-fluid" alt="..."  />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Contact
