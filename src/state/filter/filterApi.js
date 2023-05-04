import axios from "axios";
import { api } from "../../config/index";


export const getFilterDoctors = async (expert,gender,location) => {
    let link=`${api}/doctors`;
    if(expert){
        link=`${api}/doctors?expert=${expert}`
    }
    if(gender){
        link=`${api}/doctors?gender=${gender}`
    }
    if(location){
        link=`${api}/doctors?location=${location}`
    }
    
    const response = await axios.get(link);
    return response.data;
}