import React from "react"

const Contact = () => {

    return (
        <>
        <section>
            <h1>Contacta con nosotros</h1>
            <form className="container-form">
                <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-name"/>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-email"/>
                </div>
                <div>
                <label htmlFor="message">Mensaje</label>
                <input type="mensaje" className="form-message"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
        </>
    )
}

export default Contact
