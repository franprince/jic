import styles from "../styles/FeaturedCard.module.css"
import Image from 'next/image'

export default function FeaturedCard ({title, category, className, img, double}) {
    return (
        <div className={className}>
            <div className={double ? styles.f1content : styles.f2content}>
                <h2>{title}</h2>
                <h3>{category}</h3>
                {double && 
                <p>Ver el proyecto <img src="/arrow.png" alt="See the project" className={styles.arrow}/></p>
                }
            </div>
            <div className={styles.img}>
                <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                className={double ? styles.doubleImgBorder : styles.singleImgBorder}
                />
            </div>
        </div>
    )
}