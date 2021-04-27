import styles from "../styles/FeaturedCard.module.css"
import Image from 'next/image'

export default function FeaturedCard ({title, brand, className, img, double}) {
    return (
        <div className={className}>
            <div className={double ? styles.f1content : styles.f2content}>
                <h3 className={styles.h3}>{brand}</h3>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>See the project <img src="/arrow.png" alt="See the project" className={styles.arrow}/></p>
            </div>
            <div className={styles.img}>
                <Image
                src={img}
                alt={brand}
                layout="fill"
                objectFit="cover"
                className={double ? styles.doubleImgBorder : styles.singleImgBorder}
                />
            </div>
        </div>
    )
}