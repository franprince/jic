import styles from "../styles/Footer.module.css"

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section>
                    <h2>JIC</h2>
                    <div>
                    <a href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA">
                        <img src="/img/youtube.png" alt="Ir a YouTube"/>
                    </a>
                    <a href="mailto:juanignaciocali@gmail.com">
                        <img src="/img/mail.png" alt="Contactame por email"/>
                    </a>
                    <a href="https://www.instagram.com/juanignaciocali/">
                        <img src="/img/instagram.png" alt="Ir a Instagram"/>
                    </a>
                    <a href="wa.link/yxd518">
                        <img src="/img/whatsapp.png" alt="Contactame por WhatsApp"/>
                    </a>
                    </div>
                </section>
                <section className={styles.contact}>
                    <p>+54 221 356-3090</p>
                    <p>juan.ignacio.cali@gmail.com</p>
                    <p>Buenos Aires, Argentina</p>
                </section>
            </div>
        </footer>
    )
}