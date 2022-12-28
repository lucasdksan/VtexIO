import React from "react";

import arrow from "./assets/icons/icon-arrow-up.svg"
import styles from './BackToTopButtonDesktop.css'

interface Props {
    text?: string
}

const BackToTopButtonDesktop: StorefrontFunctionComponent<Props> = ({}) => {
    const scrollToTop = () => { window.scrollTo({ top:0, behavior:"smooth" }) };

    return (
        <button className={styles.container} onClick={scrollToTop}>
            <img className={styles.image} src={arrow} />
            <span className={styles.text}>Voltar ao topo</span>
        </button>
    )
}

export default BackToTopButtonDesktop;