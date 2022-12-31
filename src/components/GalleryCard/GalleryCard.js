import React, { useEffect } from "react";
import { getImages, getCategories } from "../../api/discover";
import styles from "./GalleryCard.module.css";

export default function GalleryCard(props){
    async function fetchImages(){
        const categ = await getCategories();
        props.setCurrCateg(categ[0].name);
        const result = await getImages(categ[0].name);
        props.setImageList(result);
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className={styles.imageGrid}>
            {props.imageList && props.imageList.map((image, i) => (
                <div key={i} 
                    className={styles.imageCard}>
                    <img className={styles.imageCard} src={image.imageUrl} alt={image.name}></img>
                </div>
            ))}
                
        </div>
    )


};