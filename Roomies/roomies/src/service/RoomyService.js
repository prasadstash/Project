import axios from "axios";



const Roomy_Get_By_iD_BASE_URL = "http://localhost:8080/roomy"

class RoomyService{

    getById(id){
        return axios.get(Roomy_Get_By_iD_BASE_URL+"/"+id);
    }

    updateById(roomy){
        return axios.put(Roomy_Get_By_iD_BASE_URL,roomy);
    }
}

export default new RoomyService;