import React from 'react';
import { Carousel } from 'antd';
import styles from "@/styles/showcase.module.css"

export default function Showcase() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}> Latest project </p>
            <Carousel className={styles.carousel} afterChange={onChange}>
                <div>
                    <h3 >1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Carousel>
        </div>
    )
}