import React from 'react';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
// import css
import styles from "../components/navigationSwiper.module.css";

function swiperNavigation() {
  return (
    <Swiper 
    className={styles.categoryNav} 
    spaceBetween={10} 
    slidesPerView={4}
    >
        <ul className={styles.swiperWrapper}>
            <SwiperSlide className={styles.swiperSlide}>
                <li>
                    <Link href="/en/edibles/">
                        <p>Edibles</p>
                    </Link>
                </li>
            </SwiperSlide>
            
            <SwiperSlide className={styles.swiperSlide}>
                <li>
                    <Link href="/en/flower/">
                        <p>Flower</p>
                    </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <li>
                    <Link href="/en/mushroom/">
                        <p>Magic<br />Mushroom</p>
                    </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <li>
                    <Link href="/en/gear/">
                        <p>Gear</p>
                    </Link>
                </li>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <li>
                    <Link href="/en/room/">
                        <p>Smoking<br />Room</p>
                    </Link>
                </li>
            </SwiperSlide>
        </ul>
    </Swiper>
  )
}

export default swiperNavigation