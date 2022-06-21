import styles from "../styles/Clients.module.css";
import Image from "next/image";

const Clients = () => {
    return (
        <section className={styles.clients}>
            <h2 className={styles.title}>CLIENTES</h2>
            <div className={styles.logos}>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/pastalinda.png" alt="pastalinda" layout="fixed" width={275} height={40} />
                </div>
                <div className={styles.logo}>
                    <Image src="/vw.png" alt="volkswagen" layout="fixed" width={119} height={119} />
                </div>
                <div className={styles.logo}>
                    <Image src="/pastalinda.png" alt="pastalinda" layout="fixed" width={275} height={40} />
                </div>
                <div className={styles.logo}>
                    <Image src="/vw.png" alt="volkswagen" layout="fixed" width={119} height={119} />
                </div>
            </div>
        </section>
    );
};

export default Clients;
