import React from 'react'
import styles from "../../styles/flower.module.css"
import Image from "next/image"
// import contentful items
import getProducts from "../../utils";
// import components
import Navigation from "../../components/navigation"

const contentfulLoader = ({ src, quality, width }) => {
    const params = [`w=${width}`];
  
    if (quality) {
      params.push(`q=${quality}`);
    }
  
    return `${src}?${params.join('&')}`;
  };

export default function Flower({products}) {

    console.log(products);

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

                {/* items */}
                <div className={`${styles.items} ${styles.thai}`}>
                {products.map((product) => (
                    <div>
                    {product.fields.isSoldout ? 
                    <div className={`${styles.item} ${styles.soldout}`}>
                        <div className={styles.imgContainer}>
                        {/* <Image src={'https://' + product.fields.productImage.fields.file.url} width={100} height={100} alt="happyvalley_logo" /> */}
                        <Image src={'https://' + product.fields.productImage.fields.file.url} loader={contentfulLoader} width={500} height={500} />
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.itemCategory}>
                            {product.fields.sativa ? <p className={styles.darkGreen}>Sativa</p> : <p className={`${styles.darkGreen} ${styles.inactive}`}>Sativa</p>}
                                {product.fields.indica ? <p className={styles.darkBlue}>Indica</p> : <p className={`${styles.darkBlue} ${styles.inactive}`}>Indica</p>}
                                {product.fields.hybrid ? <p className={styles.pink}>Hybrid</p> : <p className={`${styles.pink} ${styles.inactive}`}>Hybrid</p>}
                            </div>
                            <div className={styles.itemDetail}>
                                <h3>{product.fields.productName}</h3>
                                <span className={styles.border}></span>
                                <p>{product.fields.productTextTh}</p>
                            </div>
                            <div className={styles.itemPrice}>฿{product.fields.productPrice}</div>
                        </div>
                    </div>
                    :
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                        {/* <Image src={'https://' + product.fields.productImage.fields.file.url} width={100} height={100} alt="happyvalley_logo" /> */}
                        <Image src={'https://' + product.fields.productImage.fields.file.url} loader={contentfulLoader} width={500} height={500} />
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.itemCategory}>
                            {product.fields.sativa ? <p className={styles.darkGreen}>Sativa</p> : <p className={`${styles.darkGreen} ${styles.inactive}`}>Sativa</p>}
                                {product.fields.indica ? <p className={styles.darkBlue}>Indica</p> : <p className={`${styles.darkBlue} ${styles.inactive}`}>Indica</p>}
                                {product.fields.hybrid ? <p className={styles.pink}>Hybrid</p> : <p className={`${styles.pink} ${styles.inactive}`}>Hybrid</p>}
                            </div>
                            <div className={styles.itemDetail}>
                                <h3>{product.fields.productName}</h3>
                                <span className={styles.border}></span>
                                <p>{product.fields.productTextTh}</p>
                            </div>
                            <div className={styles.itemPrice}>฿{product.fields.productPrice}</div>
                        </div>
                    </div>
                    }
                    </div>
                    ))}
                </div>
            </div>

            {/* navigation */}
            <Navigation />
        </main>
    </div>
  )
}

Flower.getInitialProps = async () => {
    const products = await getProducts();

    return { products };
}