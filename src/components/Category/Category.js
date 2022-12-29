import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import styles from "./Category.module.css";



function Category(){
    const [categoryList, setCategoryList] = useState([
        { name: "Wildlife" },
        { name: "Landscape" },
        { name: "Cars" },
        { name: "Mountain" },
    ]);

    return (
        <div className={styles.containerWrapper}>
                {categoryList.map((category) => (
                    <div className={styles.category}>
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