import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import styles from "./Category.module.css";
import { getCategories } from "../../api/discover";


function Category(){
    async function fetchCategories(){
        const result = await getCategories();
        setCategoryList(result);
    };

     useEffect(() => {
        fetchCategories();
    }, []);

    const [categoryList, setCategoryList] = useState([]);
    
    return (
        <div className={styles.containerWrapper}>
            
                {categoryList && categoryList.map((category, i) => (
                    <div key={i} className={styles.category}>
                        {category.name}
                    </div>
                ))} 
                
    

            <div className={styles.filterContainer}>
                <Filter />
            </div>
        </div>
    );


}


export default Category;