import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Map from "../../components/Map"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'


export default function Location() {
    return (<section className={styles.conteiner}>
        <Head>
            <title>Country House | Location</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.content}>
            <div className={styles.painel}>
            <div className={styles.card}>
                <img src="https://www.minasecoturismo.com.br/wp-content/uploads/2019/03/D-1-800x600.jpg" alt="" className={styles.img} />
            </div>
            <div className={styles.card}><img src="https://static.wixstatic.com/media/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.jpg/v1/fill/w_900,h_1200,al_c,q_85,usm_0.66_1.00_0.01/eda3ff_cd938eb94ff646cbb56a0d9b0151251f.webp" alt="" className={styles.img} />
            </div>
            <div className={styles.card}>
            <img src="https://www.minasecoturismo.com.br/wp-content/uploads/2019/03/C-1-800x600.jpg" alt="" className={styles.img} />
            </div>
            </div>
            <div className={styles.map}>
                <Map ></Map></div>
        </div>
    </section>)
}