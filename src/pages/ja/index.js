import React from 'react'
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/category.module.css"
import Navigation from '@/components/navigation'



function index() {
  return (
    <>
        <main className={styles.repeat}>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.topContainer}>
                    <h1>Aozora Buds</h1>
                    <Image src="../../happyvalley_logo.svg" width={100} height={100} alt="happyvalley_logo" />
                </div>
            </div>
            
            <div className={styles.categories}>

                <div className={styles.category}>
                    <Image src="/edibles.jpg" width={100} height={100} />
                    <div className={styles.categoryContent}>
                        <h3>Edibles</h3>
                        <p>Delicious, amazing benefits, effective high</p>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.triangle}></div>
                    </div>
                </div>

                <div className={styles.category}>
                    <Link href="/ja/flower/">
                        <Image src="/flower.jpg" width={100} height={100} />
                        <div className={styles.categoryContent}>
                            <h3>Flower</h3>
                            <p>100% Organic, Certified, Licensed, High-Quality</p>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.triangle}></div>
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href="/ja/mushroom/">
                        <Image src="/mushroom.jpg" width={100} height={100} />
                        <div className={styles.categoryContent}>
                            <h3>Magic Mushroom</h3>
                            <p>Take a journey of bright, vibrant joy with magic mushrooms</p>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.triangle}></div>
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href="/ja/gear/">
                        <Image src="/gear.jpg" width={100} height={100} />
                        <div className={styles.categoryContent}>
                            <h3>Gear</h3>
                            <p>Various types of gear, love it, get high</p>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.triangle}></div>
                        </div>
                    </Link>
                </div>

                <div className={styles.category}>
                    <Link href="/en/room/">
                        <Image src="/room.jpg" width={100} height={100} />
                        <div className={styles.categoryContent}>
                            <h3>Smoking Room</h3>
                            <p>Relaxing, Peaceful, Private Room</p>
                        </div>
                        <div className={styles.rightBox}>
                            <div className={styles.triangle}></div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        <Navigation />
    </main>
    </>
  )
}

export default index