import React, {useState} from 'react'
import Link from "next/link";
import Image from "next/image";
// import CSS
import styles from "../components/navigation.module.css";

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function navigation() {
  return (
    <>
        <div className={styles.navbar}>
            <ul>
                <li className={styles.return} onClick={() => window.history.back()}>
                    <Image src="../../return.svg" width={30} height={30} />
                </li>
                <li className={styles.home}>
                    <Link href="/">
                        <Image src="../../home.svg" width={30} height={30} />
                    </Link>
                </li>
                <li id="top" onClick={returnTop}>
                    <p className={styles.triangle}></p>TOP
                </li>
            </ul>
        </div>
    </>
  )
}

export default navigation