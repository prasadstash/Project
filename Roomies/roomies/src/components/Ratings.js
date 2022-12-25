import React, {Component} from 'react'
import ReactStars from 'react-rating-stars-component'

export class Ratings extends Component{

  constructor(props){
    super(props);
    this.state = [];
  }
 
  render(){

  const rateChanged = (rate) => {
    alert(' You have given '+rate+' star rating for us.');
  };


  return (
    <div className="ratings">
      <ReactStars
      activeColor="#ffc107"  size={40} isHalf={true} onChange={rateChanged}/>
    </div>
  );
}
}

export default Ratings;
