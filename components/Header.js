import styles from "../styles/Header.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Header ({title, subtitle, img, projects}) {

    return (
        <header className={styles.wrapper} id="header">
            <div className={styles.header}>
            <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                />
                <h1 style={projects && {marginLeft: "0"}}>{title}</h1>
                {subtitle && 
                    <h2><i className={styles.i}>{subtitle}</i></h2>
                }
                {title == "JUAN IGNACIO CALI" && 
                    <Link href="/projects"><a>Mis proyectos</a></Link>
                }
                
            </div>
        </header>
    )
}