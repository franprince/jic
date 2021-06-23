import Select from 'react-select'
import styles from "../styles/Form.module.css"
import {useRef, useState} from "react"

export default function Form () {

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
        indicatorBanner: () => ({
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

    const [producto, setProducto] = useState()
    const [presupuesto, setPresupuesto] = useState('')
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [trabajo, setTrabajo] = useState('')
    const [puesto, setPuesto] = useState('')
    const [email, setEmail] = useState()
    const [sent, setSent] = useState(false)

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
                    <p>Hablemos sobre tu proyecto.</p>
                </div>
                <div>
                    <Select isSearchable={false} ref={formProduct} options={options1} onChange={handleSelectChange} id="producto" instanceID="12345" inputID="producto" name="producto" styles={customStyles} placeholder="Estoy necesitando" />
                </div>
                <div>
                    <Select isSearchable={false} ref={formBudget} options={options2} onChange={handleSelectChange} id="presupuesto" instanceID="86865" inputID="presupuesto" name="presupuesto" styles={customStyles} placeholder="Mi presupuesto estimado es" />
                </div>
                    
                    
                <p>
                    <textarea ref={formMessage} rows="4" onChange={(e) => setMensaje(e.target.value)} name="message" placeholder="Detalles del proyecto, algo más que tenga que saber?"/>
                </p>
                <div></div>
                <div>
                    <button>Enviar</button>
                </div>
            </form>
            <div className={styles.sent} style={sent ? {display: "flex"} : {display: "none"}}>
                <section>
                    <img src="/img/checked.png" alt="Enviado exitosamente" />
                    <button onClick={(e) => setSent(false)}>X</button>
                    Mensaje enviado exitosamente! Muchas gracias.
                </section>
            </div>
        </section>
    )
}