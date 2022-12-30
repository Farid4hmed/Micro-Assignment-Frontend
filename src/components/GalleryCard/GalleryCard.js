import React, {useState} from "react";
import styles from "./GalleryCard.module.css";

function GalleryCard(){
    const [imageList, setImageList] = useState([
        {name: <img className={styles.imageCard} src="" alt =""/> },
        {name: <img className={styles.imageCard} src="" alt =""/> },
        {name: <img className={styles.imageCard} src="" alt =""/> },
        {name: <img className={styles.imageCard} src="" alt =""/> }
    ]);
    return (
        <div className={styles.imageGrid}>
            {imageList.map((image, index) => (
                <div key={index} 
                    className={styles.imageCard}>
                    {image.name}
                </div>
            ))}
                
        </div>
    )


}


export default GalleryCard;