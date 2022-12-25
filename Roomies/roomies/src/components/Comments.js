import React, {Component} from 'react'


export class Comments extends Component{ 

  constructor(props){
    super(props);
    this.state = [];
  }  

  render(){
  return (
    <div className="comments">
     <form> 
        <p>Enter your comment here:-</p>
        <input type='text'/>
        <br/>
        <hr/>
        <div>
          <button type="submit" className="btn btn-primary ">Submit</button>
        </div>
      </form>
    </div>
  );
  }
}

export default Comments;
