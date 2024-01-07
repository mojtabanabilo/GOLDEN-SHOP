import React from 'react';
import styles from "./Teams.module.scss";
import { logos } from '../../db/db';

const Teams = () => {
    return (
        <div className={styles.teams}>
            <h1>Lorem ispem</h1>
            <div className={styles.logos}>
                {
                    logos.map((i, index) => <div className={styles.logo} key={index}>
                        <img className={styles.img_In} src={i.image} alt="logo"/>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Teams;