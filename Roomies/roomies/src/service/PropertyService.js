import axios from "axios";



const Prop_Get_By_iD_BASE_URL = "http://localhost:8080/property"


class PropertyService {

    getById(id){
        return axios.get(Prop_Get_By_iD_BASE_URL+"/"+id);
    }

    getId=(flat_no,society_name)=>{
        return axios.get(Prop_Get_By_iD_BASE_URL+"/"+flat_no+"/"+society_name)
    }
}

export default PropertyService;