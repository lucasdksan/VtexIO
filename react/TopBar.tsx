import React, { useState } from "react";

import xIcon from "./assets/icons/x.png";
import styles from "./TopBar.module.css";

console.log(xIcon)

interface TopBarProps {
    message: string;
}

const TopBar = ({ message }: TopBarProps)=>{
    const [ active, setActive ] = useState<boolean>(false);

    function handleCloseContainer(){
        setActive(!active);
    }

    function handlerComponent(){

        if(active){
            return(
                <></>
            );
        } else {
            return(
                <div className={styles.container}>
                    <div className={styles.content}>
                        <span  className={styles.textSpan}>{message}</span>
                        <button 
                            className={styles.btnClose}
                            onClick={handleCloseContainer}
                        >
                            <img src={xIcon} alt="Xicon close area" />
                    </button>
                    </div>
                </div>
            );
        }
    }

    return(
        handlerComponent()
    );
}

TopBar.schema = {
    title: "Barra de benefícios",
    description: "Descrição",
    type: "object",
    properties: {
        message: {
            title: "Nome do benefício",
            description: "Descrição do benefício",
            type: "string",
            default: null
        }
    }
};

export default TopBar;