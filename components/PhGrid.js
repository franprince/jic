import Image from 'next/image'
import styles from "../styles/PhGrid.module.css"

export default function PhGrid ({pictures, width}) {

    const pics = pictures.slice(0,9)

    return (
        <section className={styles.container}>
            <div className={styles.grid} style={{width: width}}>
                {pics.map((pic) => 
                <article className={styles.photo} key={pic}>
                        <Image
                        src={pic}
                        alt="Juan Ignacio Cali's picture"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        />
                </article>)}
            </div>
        </section>
    )
}