import React from "react"
import '../components/styles/Contact.css'

const Contact = () => {

    return (
        <>
        <section>
            <form className="container-form">
                <h1 className="form-title">Contacta con nosotros</h1>
                
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-name"/>
                
                
                <label htmlFor="email">Email</label>
                <input type="email" className="form-email"/>
                
                
                <label htmlFor="message">Mensaje</label>
                <input type="mensaje" rows='6' className="form-message"/>
                
                <button type="submit" className="send-button">Enviar</button>
            </form>
        </section>
        </>
    )
}

export default Contact
