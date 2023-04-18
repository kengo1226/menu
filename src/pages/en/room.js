import React from 'react'
import Image from "next/image"
// import CSs
import styles from "../../styles/room.module.css"
// import components
import Navigation from "../../components/navigation"

function room() {
  return (
    <div>
        <main className={styles.repeat}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div class={styles.topContainer}>
                        <h1>Aozora Buds</h1>
                        <Image src="/happyvalley_logo.svg" width={100} height={100} alt="happyvalley_logo" />
                    </div>
                    <span className={styles.border}></span>
                </div>

                <div className={styles.rooms}>
                <div className={styles.room}>
                    <Image src="/room/room01.jpg" layout='fill' objectFit='contain' />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room02.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room03.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room04.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room05.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room06.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room07.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room08.jpg" width={1452} height={968} />
                </div>
                <div className={styles.room}>
                    <Image src="/room/room09.jpg" width={1452} height={968} />
                </div>
                {/* <div className={styles.room}>
                    <Image src="/room/room10.jpg" width={100} height={100} />
                </div> */}
            </div>

            </div>

            <Navigation />
        </main>
    </div>
  )
}

export default room