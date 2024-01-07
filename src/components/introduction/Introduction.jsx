import React, { useState } from 'react';
import styles from "./Introduction.module.scss";
import { Icon } from '@iconify/react';

// images
import team from "../../assets/EMF2022_JPEG_FULL-120 copy 2.png";

const Introduction = () => {
    const [hover, setHover] = useState(false);
    return (
        <div className={styles.introduction}>
            <div className={styles.banner}>
                <img src={team} alt="team-football"/>
            </div>
            <div className={styles.goldenshop}>
                <h1>GOLDENSHOP</h1>
                <p>makes your club <span>shin!</span></p>
            </div>
            <div className={styles.mouseInside} >
                <div className={styles.bg} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <Icon icon="mingcute:right-line" style={{fontSize: "40px", color: "#fff"}}/>
                </div>
                <p style={{color: hover && "#000"}}>ShopNow</p>
            </div>
        </div>
    );
};

export default Introduction;