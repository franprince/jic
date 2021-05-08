import styles from "../styles/Header.module.css"
import Image from 'next/image'

export default function Header ({title, subtitle, img}) {

    return (
        <div className={styles.wrapper} id="header">
            <div className={styles.header}>
            <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                />
                <h1>{title}</h1>
                {subtitle && 
                    <h2><i className={styles.i}>{subtitle}</i></h2>
                }
                
            </div>
        </div>
    )
}