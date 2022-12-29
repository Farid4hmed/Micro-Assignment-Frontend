import React from "react";
import styles from "../Button/Button.module.css"
function Button(){
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.shuffleButton}>Shuffle</button>
        </div>
    );


}


export default Button;