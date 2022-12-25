import React, { Component } from 'react'
import './Catalogue.css';
import axios from 'axios';

class pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms : [],
            currentPage : 1,
            roomsPerPage : 9
        };
    }

    componentDidMount() {
        this.findAllRooms(this.state.currentPerPage);
    }

    findAllRooms(currentPage){
        currentPage = -1;
        axios.get("url" + this.state.currentPerPage +"&size" + this.state.roomsPerPage)
        .then(response => response.data)
        .then((data) => {
            this.setState({
                rooms: data.content,
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                currentPage: data.number + 1
            })
        })
    }

    render(){
        const {rooms, currentPage, roomsPerPage} = this.state;
        return (
            <div>
                <nav aria-label="Page navigation ">
                    <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                    </ul>
                </nav>
            </div>

        
        )
    }
}

export default pagination
