import Image from "next/image"
import styles from "../styles/Banner.module.css"

export default function Banner ({ img }) {

    return (
            <article className={styles.banner}>
            <Image
                src={img}
                alt="Imagen de separador"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
                />
            </article>
    )
}