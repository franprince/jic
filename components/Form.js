import Select from 'react-select'
import styles from "../styles/Form.module.css"
import {useEffect, useState} from "react"

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

    const [producto, setProducto] = useState()
    const [presupuesto, setPresupuesto] = useState('')
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [trabajo, setTrabajo] = useState('')
    const [puesto, setPuesto] = useState('')
    const [email, setEmail] = useState()

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.category == "1") {
            setProducto(selectedOption.value)
        }else{
            setPresupuesto(selectedOption.value)
        }
    }

    const handleClick = (e) => {
        fetch('/api/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, mensaje: mensaje, presupuesto: presupuesto, producto: producto, trabajo: trabajo, puesto: puesto, email: email })
        });

    }
    return (
        <section className={styles.form}>
            <form onSubmit={handleClick}>
                <p>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" name="name" placeholder="Mi nombre es*" required/>
                </p>
                <p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Mi email es*" required/>
                </p>
                <p>
                    <input onChange={(e) => setTrabajo(e.target.value)} type="text" name="job" placeholder="Estoy trabajando en"/>
                </p>
                <p>
                    <input onChange={(e) => setPuesto(e.target.value)} type="text" name="position" placeholder="Mi puesto es"/>
                </p>
                <div>
                <Select options={options1} onChange={handleSelectChange} id="producto" instanceID="12345" inputID="producto" name="producto" styles={customStyles} placeholder="Estoy necesitando" />
                <Select options={options2} onChange={handleSelectChange} id="presupuesto" instanceID="86865" inputID="presupuesto" name="presupuesto" styles={customStyles} placeholder="Mi presupuesto estimado es" />
                </div>
                <p>
                    <textarea onChange={(e) => setMensaje(e.target.value)} name="message" placeholder="Mensaje"/>
                </p>
                <button >Enviar</button>
            </form>
        </section>
    )
}