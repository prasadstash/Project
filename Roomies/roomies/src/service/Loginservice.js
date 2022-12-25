import axios from "axios";

const VENDER_BASE_URL = "http://localhost:8080/login";


class VenderService {

    // createVender(vender) {
    //     return axios.post(VENDER_BASE_URL,vender);
    // }

    validateVender(checkVender){
        return axios.post(VENDER_BASE_URL,checkVender);
    }
   
    // getVenderByPinCode(getVender){
    //     return axios.get(VENDER_BASE_URL_pin,getVender);
    // }
    // getVenders(){
    //     return axios.get(VENDER_BASE_URL);
    // }
}

export default new VenderService();
