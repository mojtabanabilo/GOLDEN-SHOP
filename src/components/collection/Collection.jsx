import React, { useState } from 'react';
import { collections } from '../../db/db';
import styles from "./Collection.module.scss";
import { Icon } from '@iconify/react';


const Collection = () => {
    const [click, setClick] = useState(false);

    const handleCardClick = (arr, index) => {
        const currentItem = arr[index];
        currentItem.boolean = !currentItem.boolean;
        const updatedCollections = arr.map((item, i) => {
            if (i === index) {
                return { ...item, boolean: true };
            } else {
                return { ...item, boolean: false };
            }
        });
        return updatedCollections;
    };

    return (
        <div className={styles.collection}>
            <h1>2022 COLLECTION</h1>
            <div className={styles.cards}>
            {
                collections.map((i, index) => <div className={styles.card} key={index}>
                        <div className={styles.new_collection}><p>new collection</p></div>
                        <img src={i.image} alt="kit" />
                        <p className={styles.name}>{i.name}</p>
                        <div className={i.boolean === true ? styles.btn : styles.btn_t} onClick={() => {
                            setClick(!click);
                            handleCardClick(collections, index);
                        }}>
                            <div className={i.boolean === true ? styles.bg : styles.bg_t}>
                                {
                                    i.boolean === false ? <Icon icon="iconoir:cancel" style={{
                                        fontSize: "25px", 
                                        cursor: "pointer", 
                                        color: "#000000",
                                    }}/> : <Icon icon="ic:round-add" style={{
                                        fontSize: "25px", 
                                        cursor: "pointer", 
                                        color: "#000000",
                                    }}/>
                                }
                                
                            </div>
                            <p style={{display: i.boolean === true ? "none" : "block"}}>SelectOptions</p>
                        </div>
                        <p className={styles.price}>{i.price}</p>
                    </div>

                )
            }
            </div>
        </div>
    );
};

export default Collection;