import React from "react";
import { getImagesByLike, getImagesByDate } from "../../api/discover";
import styles from "./Filter.module.css";
function Filter(props){
    async function fetchImages(event){
        if(event.target.value == "1"){
            const result = await getImagesByLike(props.currCateg, parseInt(event.target.value));
            props.setImageList(result);
        }
        else {
            const result = await getImagesByDate(props.currCateg, event.target.value);
            props.setImageList(result);
        }
    }
    return (
        <div className={styles.filter}>
            <select onChange={fetchImages}>
                <option value="">
                    Filter
                </option>
                <option value="asc">
                    Sort by Created Date(asc)
                </option>
                 <option value="desc">
                    Sort by Created Date(desc)
                </option>
                <option value="1">
                    Filter by like
                </option>
            </select>
        </div>
    )


}


export default Filter;