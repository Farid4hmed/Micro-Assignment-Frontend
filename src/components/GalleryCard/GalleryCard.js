import React, { useState, useEffect } from "react";
import { getImages, getCategories } from "../../api/discover";
import { addToFav } from "../../api/discover";
import styles from "./GalleryCard.module.css";

export default function GalleryCard(props){
    const [likedImages, setLikedImages] = useState([]);

    async function fetchImages(){
        const categ = await getCategories();
        props.setCurrCateg(categ[0].name);
        const result = await getImages(categ[0].name);
        props.setImageList(result);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    async function setLike(image){
    await addToFav(image._id);
    let imageFound = likedImages.includes(image._id);
    if(imageFound){
        const index = likedImages.indexOf(image._id);
        
        likedImages.splice(index, 1);
    }
    else likedImages.push(image._id);
    setLikedImages([...likedImages]);
    }


    return (
        <div className={styles.imageGrid}>
            {props.imageList && props.imageList.map((image, i) => (
                <div key={i} 
                    className={styles.imageCard}>
                    <img className={styles.imageCard} src={image.imageUrl} alt={image.name}></img>
                    <h2>{image.name}</h2>
                    <h2 onClick={() => {setLike(image);}}>{likedImages.includes(image._id)===true ? "❤️" :  "♡" }</h2>
                </div>
            ))}
        </div>
    )


};