import React, {useState} from 'react';
import styles from "./Discount.module.scss";
import { Icon } from '@iconify/react';


// images
import off from "../../assets/off.png";

const Discount = () => {
    const [hover, setHover] = useState(false);
    return (
        <div className={styles.discount}>
            <img src={off} alt="off" />
            <div className={styles.text}>
                <h1>NICHT<br />VERPASSEN !</h1>
                <p>Vereine erhalten einen Nachlass<br />von 10% vom Listenpreis.<br />Ausrustervertrage konnen einen<br />hoheren Rabbat beinhalten.</p>
                <div className={styles.mouseInside} >
                    <div className={styles.bg} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <Icon icon="mingcute:right-line" style={{fontSize: "40px", color: "#fff"}}/>
                    </div>
                    <p style={{color: hover && "#000"}}>ShopNow</p>
                </div>
            </div>
        </div>
    );
};

export default Discount;