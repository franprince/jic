import totalPhotos from "../phgrid.json"
import Image from 'next/image'
import styles from "../styles/PhGrid.module.css"

const photos = totalPhotos.slice(0,9)

export default function PhGrid () {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                {photos.map((photo) => 
                <article className={styles.photo} key={photos.indexOf(photo)}>
                        <Image
                        src={photo.img}
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