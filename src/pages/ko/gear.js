import React from 'react'
import Image from "next/image"
// import CSs
import styles from "../../styles/gear.module.css"
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

                <h2 className={styles.freeTxt}>韓国語で無料ですテキスト</h2>
            <div className={styles.gears}>
                <div className={styles.gear}>
                <Image src="/gear/gear-img1.jpg" layout='fill' objectFit='contain' />
                    <h2>Anomoly Drift Bubbler</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img2.jpg" layout='fill' objectFit='contain' />
                    <h2>Breaker Bong(Freeze Pipe)</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img3.jpg" layout='fill' objectFit='contain' />
                    <h2>Bong(later)</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img4.jpg" layout='fill' objectFit='contain' />
                    <h2>Freeze Pipe size s</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img5.jpg" layout='fill' objectFit='contain' />
                    <h2>Freeze Pipe</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img6.jpg" layout='fill' objectFit='contain' />
                    <h2>Hammer bong(Freeze Pipe)</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img7.jpg" layout='fill' objectFit='contain' />
                    <h2>Hammer bong(Freeze Pipe)</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img8.jpg" layout='fill' objectFit='contain' />
                    <h2>Stundglass Gravity Bong</h2>
                </div>

                <div className={styles.gear}>
                <Image src="/gear/gear-img9.jpg" layout='fill' objectFit='contain' />
                    <h2>Volcano(ARizer XQ2)</h2>
                </div>

            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/cannabis_balm_001.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Cannabis Balm</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;200</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/cannabis_balm_for_skin_002.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Cannabis Balm For Skin</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;100</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/cannabis_tea_003.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Cannabis Tea</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;100</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/mosquito_spray_004.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Mosquito Spray</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;100</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/relaxing_aloma_005.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Relaxing Aloma</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;250</div>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                <Image src="/gear/rolling_paper_006.jpg" layout='fill' objectFit='cover' />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemDetail}>
                        <h3>Rolling Paper</h3>
                        <span className={styles.border}></span>
                        <p>THC 24%, CBG 1%, Caryophyllence</p>
                    </div>
                    <div className={styles.itemPrice}>&#3647;60</div>
                </div>
            </div>


            </div>

            <Navigation />
        </main>
    </div>
  )
}

export default room