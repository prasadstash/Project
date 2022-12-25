import React, {Component} from 'react'
import './Details.css';
import Comments from './Comments';
import Ratings from './Ratings';

export class Details extends Component {

    render(){

    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

    return (
        <div className="details">
            <div className="details_heading my-3">
                <h1 className="fs-bold text-center" >Room Details</h1>
                <hr />
            </div>

            <div class = "card1-wrapper">
                <div class = "card1">
                    <div className="room-imgs">
                        <div class = "img-display">
                            <div class = "img-showcase">
                                <img src = "./images/room1.jpg" alt = "room image" />
                                <img src = "./images/room2.jpg" alt = "room image" />
                                <img src = "./images/room3.jpg" alt = "room image"/>
                                <img src = "./images/room4.jpg" alt = "room image"/>
                            </div> 
                        </div>

                        <div class = "img-select">
                            <div class = "img-item">
                                <a href = "#" data-id = "1">
                                    <img src = "./images/room1.jpg" alt = "room image"/>
                                </a>
                            </div>
                            <div class = "img-item">
                                <a href = "#" data-id = "2">
                                    <img src = "./images/room2.jpg" alt = "room image"/>
                                </a>
                            </div>
                            <div class = "img-item">
                                <a href = "#" data-id = "3">
                                    <img src = "./images/room3.jpg" alt = "room image"/>
                                </a>
                            </div>
                            <div class = "img-item">
                                <a href = "#" data-id = "4">
                                    <img src = "./images/room4.jpg" alt = "room image"/>
                                </a>
                            </div>
                        </div>
                    </div>

                     {/* card right  */}
                    <div class = "room-content">
                        <h2 class = "room-title">Durga Apartment</h2>
                        <div class = "room-rating">
                            <span><Ratings/></span>
                        </div>

                        <div class = "room-price">
                            <p class = "new-price">Price: <span>$5000 (5%)</span></p>
                        </div>

                        <div class = "room-detail">
                            <h3>About this room </h3>
                            <p>Standard rooms available with homely food by Saerah homes gents hostel, Judgemukku , Kadavantra, Palarivattom and Edappally</p>
                            <p>Food ( 6 days non veg 1 day veg)<br/>
                                Accommodation, Water, Electricity ,  Wi-Fi, Caretaker,  Parking, RO water
                            </p>
                        </div>
                        
                        <div class = "room-comments">
                            <h3>Comments </h3>
                            <p><Comments /></p>
                        </div>

                    </div>
               </div>
            </div>
        </div>
    )
    }
}

export default Details
