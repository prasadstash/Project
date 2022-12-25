import React from 'react'
import './Catalogue.css';
import Pagination from './Pagination';

function Catelog() {
    return (
        <div className="catelog">
            <div className="catelog_heading my-3">
                <h1 className="fs-bold text-center">Welcome to Catalogue</h1>
                <hr />
            </div>
            
            <section className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room6_2.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                   <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room2.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room3.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2 ">
                                <div className="card-body">
                                   <img src="./images/room1.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                   <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room2.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room3.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2 ">
                                <div className="card-body">
                                   <img src="./images/room1.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                   <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room2.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 bg-light mb-2">
                                <div className="card-body">
                                   <img src="./images/room3.jpg" class="img-fluid" alt="" height="200px"/>
                                </div>         
                                <div class="card-body">
                                    <h6>Durga Apartment</h6>
                                   <p>Description me quick example text to build on the card title and make </p>
                                   <p>$4656</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />


            </section>           
        </div>      
    )
}

export default Catelog
