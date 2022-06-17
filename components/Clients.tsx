import styles from "../styles/Clients.module.css";
import Image from "next/image";

const Clients = () => {
    return (
        <section className={styles.clients}>
            <h2>Clientes</h2>
            <div className={styles.logos}>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
                <div className={styles.logo}>
                    <Image src="/netflix.png" alt="netflix" layout="fixed" width={200} height={54} />
                </div>
            </div>
        </section>
    );
};

export default Clients;
