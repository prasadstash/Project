import axios from "axios";

const Image_POST_Base_Url = "http://localhost:8080/image";

class ImageService{


    addImage=()=>{
        return axios.post(Image_POST_Base_Url,image);
    }
}