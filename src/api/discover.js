import axios from "axios";

export async function getCategories(){
    const reqUrl = "https://micro-assignment-backend-9atx.onrender.com/api/discover/getCategories";
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
} 