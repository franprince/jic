import styles from "../styles/Form.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Form({ sent, setSent, size }) {
    // const customStyles = {
    //     control: () =>
    //         size.width < 325
    //             ? {
    //                   border: "1px solid black",
    //                   borderRadius: "10px",
    //                   display: "flex",
    //                   padding: "0.5rem 0rem 0.5rem 0.5rem",
    //                   cursor: "pointer",
    //               }
    //             : size.width < 700
    //             ? {
    //                   border: "1px solid black",
    //                   borderRadius: "10px",
    //                   display: "flex",
    //                   padding: "0.8rem 1rem 0.8rem 0.8rem",
    //                   cursor: "pointer",
    //               }
    //             : {
    //                   border: "1px solid black",
    //                   borderRadius: "10px",
    //                   display: "flex",
    //                   padding: "0.7rem",
    //                   cursor: "pointer",
    //                   fontSize: "16px",
    //               },
    //     placeholder: () => ({
    //         color: "black",
    //         fontSize: "16px",
    //     }),
    //     option: () => ({
    //         padding: "0.7rem 1rem 0.7rem 2rem",
    //         "&:hover": {
    //             backgroundColor: "#C5C5C5",
    //         },
    //     }),
    //     indicatorBanner: () => ({
    //         display: "none",
    //     }),
    //     indicatorsContainer: () => ({
    //         display: "none",
    //     }),
    //     container: () =>
    //         size.width > 10000
    //             ? {
    //                   backgroundColor: "#F9F9F9",
    //                   marginTop: "8rem",
    //               }
    //             : size.width < 325
    //             ? {
    //                   backgroundColor: "#F9F9F9",
    //                   marginTop: "auto",
    //               }
    //             : {
    //                   backgroundColor: "#F9F9F9",
    //                   marginTop: "auto",
    //               },
    //     menuList: () => ({
    //         backgroundColor: "#F9F9F9",
    //         marginTop: "-8px",
    //         padding: "0.5rem 0 0.5rem 0",
    //     }),
    // };
    const emptyForm = { producto: "", presupuesto: "", nombre: "", mensaje: "", trabajo: "", puesto: "", email: "" };
    const [formValues, setFormValues] = useState(emptyForm);
    const [missingValue, setMissingValue] = useState({ presupuesto: false, producto: false });
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!!formValues.producto | !!!formValues.presupuesto) {
            setMissingValue({ presupuesto: !!formValues.presupuesto, producto: !!formValues.producto });
        } else {
            fetch("/api/mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formValues }),
            });
            setFormValues(emptyForm);
            setSent(true);
        }
    };

    const handleClick = (e) => {
        setSent(false);
        router.reload(window.location.pathname);
    };

    const handleChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });

    return (
        <section className={styles.form}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">
                    <input
                        onChange={handleChange}
                        value={formValues.nombre}
                        type="text"
                        name="nombre"
                        placeholder="Mi nombre es*"
                        required
                    />
                </label>
                <label htmlFor="email">
                    <input
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                        placeholder="Mi email es*"
                        required
                    />
                </label>
                <label htmlFor="trabajo">
                    <input
                        onChange={handleChange}
                        value={formValues.trabajo}
                        type="text"
                        name="trabajo"
                        placeholder="Estoy trabajando en"
                    />
                </label>
                <label htmlFor="puesto">
                    <input
                        onChange={handleChange}
                        value={formValues.puesto}
                        type="text"
                        name="puesto"
                        placeholder="Mi puesto es"
                    />
                </label>
                <div className={styles.mobileCell}>
                    <h2>Cuál es tu idea?</h2>
                    <p className={styles.hablemos}>Hablemos sobre tu proyecto.</p>
                </div>
                <div className={styles.select}>
                    <select required onChange={handleChange} id="producto" name="producto" styles={styles.select}>
                        <option value="">Estoy necesitando</option>
                        <option value="Video Producto">Video Producto</option>
                        <option value="Foto Producto">Foto Producto</option>
                        <option value="Video Institucional">Video Institucional</option>
                        <option value="Animacion">Animación</option>
                        <option value="Otro">Ni idea, ayudame a decidir 🙏</option>
                    </select>
                    <p style={missingValue.producto ? { display: "block" } : { display: "none" }}>
                        Por favor, completá este campo.
                    </p>
                </div>
                <div className={styles.select}>
                    <select required onChange={handleChange} id="presupuesto" name="presupuesto" styles={styles.select}>
                        <option value="">Mi presupuesto estimado es</option>
                        <option value="$20.000">$20.000</option>
                        <option value="$20.000 - $50.000">$20.000 - $50.000</option>
                        <option value="$50.000 - $100.000">$50.000 - $100.000</option>
                        <option value="$100.000 - $200.000">$100.000 - $200.000</option>
                        <option value="Más de $200.000">Más de $200.000</option>
                        <option value="No especifica">Prefiero no especificar</option>
                    </select>
                    <p style={missingValue.presupuesto ? { display: "block" } : { display: "none" }}>
                        Por favor, completá este campo.
                    </p>
                </div>
                <label htmlFor="mensaje">
                    <textarea
                        rows="4"
                        onChange={handleChange}
                        name="mensaje"
                        placeholder="Detalles del proyecto, algo más que tenga que saber?"
                    />
                </label>
                <div className={styles.space}></div>
                <div className={styles.button}>
                    <button>Enviar</button>
                </div>
            </form>
            <motion.div animate={sent ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} className={styles.sent}>
                <section>
                    <img src="/img/cohete.png" alt="Enviado exitosamente" />
                    <button onClick={handleClick}></button>
                    <h2>El mensaje fue enviado!</h2>
                    {size.width > 1000 ? (
                        <p>
                            Gracias! En las próximas horas
                            <br />
                            me pondré en contacto con vos!
                        </p>
                    ) : (
                        <p>
                            Gracias!
                            <br /> En las próximas horas
                            <br />
                            me pondré en contacto con vos!
                        </p>
                    )}
                </section>
            </motion.div>
        </section>
    );
}
