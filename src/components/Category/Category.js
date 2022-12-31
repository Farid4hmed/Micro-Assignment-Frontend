import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import styles from "./Category.module.css";
import { getCategories, getImages} from "../../api/discover.js";

function Category(props){
    async function fetchCategories(){
        const result = await getCategories();
        setCategoryList(result);
    };

    async function fetchImages(categName){
        props.setCurrCateg(categName);
        const result = await getImages(categName);
        props.setImageList(result);
    }
     useEffect(() => {
        fetchCategories();
    }, []);

   

    const [categoryList, setCategoryList] = useState([]);
    
    return (
        <div className={styles.containerWrapper}>
            
                {categoryList && categoryList.map((category, i) => (
                    <button onClick={() => {fetchImages(category.name)}} key={i} className={styles.category}>
                        {category.name}
                    </button>
                ))}
                
    

            <div className={styles.filterContainer}>
                <Filter imageList={props.imageList} setImageList={props.setImageList} currCateg={props.currCateg}/>
            </div>
        </div>
    );


}


export default Category;