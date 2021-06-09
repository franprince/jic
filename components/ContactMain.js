import styles from "../styles/ContactMain.module.css"
import Select from 'react-select'

export default function ContactMain () {

    const options1 = [
        {
            value: "Video Producto", label: "Video Producto"
        },
        {
            value: "Foto Producto", label: "Foto Producto"
        },
        {
            value: "Video Institucional", label: "Video Institucional"
        },
        {
            value: "Animacion", label: "Animación"
        },
        {
            value: "Otro", label: "Ni idea, ayudame a decidir 🙏"
        }
    ]

    const options2 = [
        {
            value: "$15.000", label: "$15.000"
        },
        {
            value: "$20.000-$50.000", label: "$20.000-$50.000"
        },
        {
            value: "$60.000", label: "$60.000"
        },
        {
            value: "Mas de $60.000", label: "Más de $60.000"
        },
        {
            value: "No especifica", label: "Prefiero no especificar"
        }
    ]

    const customStyles = {
        control: () => ({
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            padding: "0.3rem 1rem 0.3rem 0.8rem",
            cursor: "pointer",
        }),
        placeholder: () => ({
            color: "black",
            fontSize: "16px"
        }),
        option: () => ({
            padding: "0.7rem 1rem 0.7rem 2rem",
            "&:hover": {
                backgroundColor: "#C5C5C5"
            },
        }),
        indicatorSeparator: () => ({
            display: "none"
        }),
        indicatorsContainer: () => ({
            display: "none"
        }),
        container: () => ({
            backgroundColor: "#F9F9F9"
        }),
        menuList: () => ({
            backgroundColor: "#F9F9F9",
            marginTop: "-8px",
            padding: "0.5rem 0 0.5rem 0"
        })
    }
    return (
        <main className={styles.main}>
            <section>
                <article className={styles.area1}>
                    <h2>Conversemos!</h2>
                    <p className={styles.border}>Dejame saber quien sos y cómo puedo ayudarte.</p>
                    <p>Si no querés llenar el formulario, podes enviarme un mail o llamarme. </p>
                </article>
                <article className={styles.area2}>
                    <h3>Mis datos</h3>
                    <p>juan.ignacio.cali@gmail.com</p>
                    <p>+54 221 356-3090</p>
                    <h3>Seguime</h3>
                </article>
                <article className={styles.area3}>
                    <h2>Quién sos?</h2>
                    <p className={styles.border}>Dejame tus datos, así podemos estar en contacto.</p>
                </article>
                <article className={styles.area4}>
                    <Select instanceId="Necesidades" options={options1} styles={customStyles} placeholder="Estoy necesitando"/>
                    <Select instanceId="Presupuesto" options={options2} styles={customStyles} placeholder="Mi presupuesto estimado es"/>
                </article>
                <article className={styles.area5}>
                    <h2>Cuál es tu idea?</h2>
                    <p className={styles.border}>Hablemos sobre tu proyecto.</p>
                </article>
            </section>
        </main>
    )
}