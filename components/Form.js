import Select from 'react-select'
import styles from "../styles/Form.module.css"
import {useRef, useState, useEffect} from "react"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

export default function Form ({sent, setSent, size}) {

    const options1 = [
        {
            value: "Video Producto", label: "Video Producto", category: "1"
        },
        {
            value: "Foto Producto", label: "Foto Producto", category: "1"
        },
        {
            value: "Video Institucional", label: "Video Institucional", category: "1"
        },
        {
            value: "Animacion", label: "Animación", category: "1"
        },
        {
            value: "Otro", label: "Ni idea, ayudame a decidir 🙏", category: "1"
        }
    ]

    const options2 = [
        {
            value: "$15.000", label: "$15.000"
        },
        {
            value: "$20.000 - $50.000", label: "$20.000 - $50.000"
        },
        {
            value: "$50.000 - $100.000", label: "$50.000 - $100.000"
        },
        {
            value: "Más de $100.000", label: "Más de $100.000"
        },
        {
            value: "No especifica", label: "Prefiero no especificar"
        }
    ]

    const customStyles = {
        control: () => (size.width < 325 ? {
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            padding: "0.5rem 0rem 0.5rem 0.5rem",
            cursor: "pointer",
        } : size.width < 700 ? {
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            padding: "0.8rem 1rem 0.8rem 0.8rem",
            cursor: "pointer",
        } : {
            border: "1px solid black",
            borderRadius: "10px",
            display: "flex",
            padding: "0.7rem",
            cursor: "pointer",
            fontSize: "16px"
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
        indicatorBanner: () => ({
            display: "none"
        }),
        indicatorsContainer: () => ({
            display: "none"
        }),
        container: () => (size.width > 10000 ? {
            backgroundColor: "#F9F9F9",
            marginTop: "8rem",
        } : size.width < 325 ? {
            backgroundColor: "#F9F9F9",
            marginTop: "auto",
        } : {
            backgroundColor: "#F9F9F9",
            marginTop: "auto",
        }),
        menuList: () => ({
            backgroundColor: "#F9F9F9",
            marginTop: "-8px",
            padding: "0.5rem 0 0.5rem 0",
        })
    }

    const [producto, setProducto] = useState()
    const [presupuesto, setPresupuesto] = useState()
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [trabajo, setTrabajo] = useState('')
    const [puesto, setPuesto] = useState('')
    const [email, setEmail] = useState()
    const [missingProduct, setMissingProduct] = useState(false)
    const [missingBudget, setMissingBudget] = useState(false)
    const router = useRouter()

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.category == "1") {
            setProducto(selectedOption.value)
        }else{
            setPresupuesto(selectedOption.value)
        }
    }

    const formName = useRef(null)
    const formProduct = useRef(null)
    const formBudget = useRef(null)
    const formEmail = useRef(null)
    const formPosition = useRef(null)
    const formMessage = useRef(null)
    const formJob = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!producto) {
            if (!presupuesto) {
                setMissingBudget(true)
                setMissingProduct(true)
            } else {
                setMissingProduct(true)
            }
        } else if (!presupuesto) {
            if (!producto) {
                setMissingBudget(true)
                setMissingProduct (true)
            } else {
                setMissingBudget(true)
            }
        }
        else {
            fetch('/api/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, mensaje: mensaje, presupuesto: presupuesto, producto: producto, trabajo: trabajo, puesto: puesto, email: email })
        });
        setSent(true)
        formName.current.value = ""
        formEmail.current.value = ""
        formJob.current.value = ""
        formPosition.current.value = ""
        formProduct.current.value = ""
        formBudget.current.value = ""
        formMessage.current.value = ""
        }
        
    }

    const handleClick = (e) => {
        setSent(false)
        router.reload(window.location.pathname)
    }
    return (
        <section className={styles.form}>
            <form onSubmit={handleSubmit}>
                <p>
                    <input ref={formName} onChange={(e) => setNombre(e.target.value)} type="text" name="name" placeholder="Mi nombre es*" required/>
                </p>
                <p>
                    <input ref={formEmail} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Mi email es*" required/>
                </p>
                <p>
                    <input ref={formJob} onChange={(e) => setTrabajo(e.target.value)} type="text" name="job" placeholder="Estoy trabajando en"/>
                </p>
                <p>
                    <input ref={formPosition} onChange={(e) => setPuesto(e.target.value)} type="text" name="position" placeholder="Mi puesto es"/>
                </p>
                <div className={styles.mobileCell}>
                    <h2>Cuál es tu idea?</h2>
                    <p className={styles.hablemos}>Hablemos sobre tu proyecto.</p>
                </div>
                <div className={styles.select}>
                    <Select isSearchable={false} ref={formProduct} options={options1} onChange={handleSelectChange} id="producto" instanceID="12345" inputID="producto" name="producto" styles={customStyles} placeholder="Estoy necesitando" />
                    <p style={missingProduct ? {display: "block"} : {display: "none"}}>Por favor, completá este campo.</p>
                </div>
                <div className={styles.select}>
                    <Select isSearchable={false} ref={formBudget} options={options2} onChange={handleSelectChange} id="presupuesto" instanceID="86865" inputID="presupuesto" name="presupuesto" styles={customStyles} placeholder="Mi presupuesto estimado es" />
                    <p style={missingBudget ? {display: "block"} : {display: "none"}}>Por favor, completá este campo.</p>
                </div>
                <p>
                    <textarea ref={formMessage} rows="4" onChange={(e) => setMensaje(e.target.value)} name="message" placeholder="Detalles del proyecto, algo más que tenga que saber?"/>
                </p>
                <div className={styles.space}></div>
                <div className={styles.button}>
                    <button>Enviar</button>
                </div>
            </form>
            <motion.div  animate={sent ? {scale: 1, opacity: 1} : {scale: 0, opacity: 0}} className={styles.sent}>
                <section>
                    <img src="/img/cohete.png" alt="Enviado exitosamente" />
                    <button onClick={handleClick}></button>
                    <h2>El mensaje fue enviado!</h2>
                    {size.width > 1000 ? <p>Gracias! En las próximas horas<br/>me pondré en contacto con vos!</p> : <p>Gracias!<br/> En las próximas horas<br/>me pondré en contacto con vos!</p>}
                </section>
            </motion.div>
        </section>
    )
}