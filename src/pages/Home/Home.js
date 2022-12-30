import React from "react";

import Button from "../../components/Button/Button.js";
import Category from "../../components/Category/Category.js";
import GalleryCard from "../../components/GalleryCard/GalleryCard.js";

import styles from "./Home.module.css";

function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Category />
                <GalleryCard />
            </div>
            <Button />
        </div>
       
    );
}

export default Home;