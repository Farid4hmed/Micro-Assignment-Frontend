import React from "react";
import { shuffle } from "../../api/discover";
import styles from "./Button.module.css";

function Button(props){
    async function shuffleImg(){
       const result = await shuffle(props.currCateg);
       props.setImageList(result);
    }
    return (
        <div className={styles.buttonContainer}>
            <button onClick={shuffleImg} className={styles.shuffleButton}>Shuffle</button>
        </div>
    );


}


export default Button;