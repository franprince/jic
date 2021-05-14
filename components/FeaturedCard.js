import styles from "../styles/FeaturedCard.module.css"
import Image from 'next/image'

export default function FeaturedCard ({item, index, className}) {
    return (
        <div className={className}>
            <div className={index == 0 ? styles.f1content : styles.f2content}>
                <section className={styles.info}>
                <h2>{item.name}</h2>
                <h3>{item.categories.join(", ")}</h3>
                {index == 0 && 
                <p>Ver el proyecto <img src="/arrow.png" alt="See the project" className={styles.arrow}/></p>
                }
                </section>
            </div>
            <div className={styles.img}>
                <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                quality={100}
                className={index == 0 ? styles.doubleImgBorder : styles.singleImgBorder}
                />
            </div>
        </div>
    )
}