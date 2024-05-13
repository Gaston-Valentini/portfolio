import style from "./Contact.module.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaWpforms, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    const [form, setForm] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef();
    const [successMessage, setSuccessMessage] = useState("");

    const inputChange = (e) => {
        const { name, value } = e.target;

        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
                setSuccessMessage("Correo enviado correctamente");
            },
            (error) => {
                console.log(error);
                setSuccessMessage("Ha ocurrido un error, inténtalo nuevamente");
            }
        );

        setTimeout(() => {
            setSuccessMessage("");
        }, 5000);
    };

    useEffect(() => {
        const isValid = Object.values(form).every((value) => value.trim() !== "");
        setIsFormValid(isValid);
    }, [form]);

    return (
        <section className={style.container} id="contact">
            <div className={style.containerCard}>
                <div className={style.form}>
                    <div className={style.formTitle}>
                        <FaWpforms className={style.formTitleIcon} />
                        <p className={style.formTitleText}>CONTACTO</p>
                    </div>
                    <p className={style.formText}>Puede ponerse en contacto conmigo rellenando el siguiente formulario con sus datos</p>
                    <form className={style.formInputs} ref={formRef} onSubmit={sendEmail}>
                        <div className={style.formInputsSection}>
                            <label className={style.formInputsSectionTitle}>Nombre</label>
                            <input className={style.formInputsSectionInput} type="text" name="user_name" onChange={(e) => inputChange(e)} />
                        </div>
                        <div className={style.formInputsSection}>
                            <label className={style.formInputsSectionTitle}>Correo</label>
                            <input className={style.formInputsSectionInput} type="email" name="user_email" onChange={(e) => inputChange(e)} />
                        </div>
                        <div className={style.formInputsSection}>
                            <label className={style.formInputsSectionTitle}>Mensaje</label>
                            <textarea className={style.formInputsSectionInput} name="message" onChange={(e) => inputChange(e)} />
                        </div>
                        <input className={style.formInputsSubmit} type="submit" value="Enviar" disabled={!isFormValid} />
                        <label className={style.formInputsMessage}>{successMessage}</label>
                    </form>
                </div>
                <div className={style.data}>
                    <div className={style.dataElement}>
                        <MdEmail className={style.dataElementIcon} /> <p className={style.dataElementText}>gastonvalentiniruiz@gmail.com</p>
                    </div>
                    <div className={style.dataElement}>
                        <FaPhoneAlt className={style.dataElementIcon} /> <p className={style.dataElementText}>623 27 18 06</p>
                    </div>
                    <div className={style.dataElement}>
                        <FaLocationDot className={style.dataElementIcon} /> <p className={style.dataElementText}>Cornellana 1, Benidorm - Alicante, 03502</p>
                    </div>
                    <div className={style.dataElementButtons}>
                        <a href="https://github.com/Gaston-Valentini" target="_blank">
                            <FaGithub className={style.dataElementButtonsIcon} />
                        </a>
                        <a href="https://www.linkedin.com/in/gastonvalentini/" target="_blank">
                            <FaLinkedin className={style.dataElementButtonsIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
