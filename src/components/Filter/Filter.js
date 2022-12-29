import React from "react";
import styles from "./Filter.module.css";
function Filter(){

    return (
        <div className={styles.filter}>
            <select>
                <option>
                    Filter
                </option>
                <option>
                    Sort by Created Date(asc)
                </option>
                <option>
                    Sort by Created Date(desc)
                </option>
                <option>
                    Filter by like
                </option>
            </select>
        </div>
    )


}


export default Filter;