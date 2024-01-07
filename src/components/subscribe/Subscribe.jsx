import React, { useState } from 'react';
import styles from "./Subscribe.module.scss";
import { Icon } from '@iconify/react';

const Subscribe = () => {
    const [hover, setHover] = useState(false);
    const [value, setValue] = useState("");
    const [touch, setTouch] = useState(false);

    return (
        <div className={styles.subscribe}>
            <div className={styles.text}>
                <h1>Subscribe to Our Newsletter</h1>
                <p>Lorem ispem</p>
            </div>
            <div className={styles.input_button}>
                <div className={styles.input_section}>
                    <input
                        className={styles.input_In}
                        style={{
                            background: touch && value === "" && "#ff8b8b",
                            borderColor: touch && value === "" && "#b30000",
                        }}
                        type="text" 
                        value={value} 
                        placeholder='XXXX' 
                        onChange={(e) => setValue(e.target.value)}
                        onFocus={() => setTouch(true)}
                    />
                    {
                        value !== "" && <Icon icon="ei:check" style={{
                            fontSize: "25px",
                            color: "#059600",
                            transform: "translate(-140%, 25%)"
                        }}/> 
                    }
                    {
                        touch && value === "" && <Icon icon="solar:danger-circle-outline" style={{
                            fontSize: "20px",
                            color: "#ff1717",
                            transform: "translate(-140%, 25%)"
                        }}/>
                    }
                </div>
                <div className={styles.mouseInside} >
                    <div className={styles.bg} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <Icon icon="mingcute:right-line" style={{fontSize: "40px", color: "#fff"}}/>
                    </div>
                    <p style={{color: hover && "#000"}}>ShopNow</p>
                </div>
            </div>
            {
                touch && value === "" && <span>Please Provide a valid xxxx address.</span>
            }
        </div>
    );
};

export default Subscribe;