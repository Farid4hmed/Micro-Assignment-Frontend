import axios from "axios";

export async function getCategories(){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/getCategories`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getImages(category){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/${category}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getImagesByLike(category, filterByLike){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/${category}?filterByLike=${filterByLike}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getImagesByDate(category, sortByDate){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/${category}?sortByDate=${sortByDate}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};


export async function addToFav(imgID){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/fav/${imgID}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};


export async function shuffle(category){
    const reqUrl = `https://micro-assignment-backend-9atx.onrender.com/api/discover/${category}?shuffle=4`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
}