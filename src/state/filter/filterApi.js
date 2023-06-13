import axios from "axios";
import { api } from "../../config/index";
export const getFilterDoctors = async (experts,search) => {
    let queryString='';
    if(experts?.length > 0){
     queryString +=experts.map(tag=>`expert=${tag}`).join("&");
    }
    if(search !== ''){
     queryString += `&q=${search}`;
    }
     const response = await axios.get(`${api}/doctors/?${queryString}`);
     return response.data;
}
export const getFilterNurses = async (expert,gender,location) => {
    let link=`${api}/get/nurses`;
    if(location){
        link=`${api}/get/nurses?location=${location}`
    }
    const response = await axios.get(link);
    return response.data;
}