import React, { useState } from "react";

import Button from "../../components/Button/Button.js";
import Category from "../../components/Category/Category.js";
import GalleryCard from "../../components/GalleryCard/GalleryCard.js";

import styles from "./Home.module.css";

export default function Home(){
    const [imageList, setImageList] = useState([]);
    const [currCateg, setCurrCateg] = useState([]);
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Category imageList={imageList} setImageList={setImageList} currCateg={currCateg} setCurrCateg={setCurrCateg}/>
                <GalleryCard imageList={imageList} setImageList={setImageList} currCateg={currCateg} setCurrCateg={setCurrCateg}/>
            </div>
            <Button imageList={imageList} setImageList={setImageList} currCateg={currCateg}/>
        </div>
       
    );
}
