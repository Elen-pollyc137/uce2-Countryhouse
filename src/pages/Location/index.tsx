import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Map from "../../components/Map"



export default function Location() {
    return (<section className={styles.conteiner}>
        <Head>
            <title>Country House | Location</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.content}>
            <div className={styles.painel}></div>
            <div className={styles.map}>
                <Map ></Map></div>
        </div>
    </section>)
}