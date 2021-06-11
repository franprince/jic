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

    async function handleSubmit (e) {
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => 
            {if(!field.name) return;
            formData[field.name] = field.value})
            fetch('/api/mail', {
                method: 'post',
                body: JSON.stringify(formData)
                })
    }
    return (
        <section className={styles.form}>
            <form method="post" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </p>
                <p>
                    <label htmlFor="message" >Message</label>
                    <textarea name="message"/>
                </p>
                <div>
                <Select options={options1} instanceID="Producto" name="producto" styles={customStyles} placeholder="Estoy necesitando" />
                <Select options={options2} instanceID="Presupuesto" name="presupuesto" styles={customStyles} placeholder="Mi presupuesto estimado es" />
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}