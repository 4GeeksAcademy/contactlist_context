import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Contactos = () =>{

    const {store,actions} = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    
    return (
       <div className="container">
        <h1 className="text-center mb-5">Añadir Contactos</h1>
        <form>
            <div className="mb-3">
                <label className="form-label" htmlFor="inputName">Nombre</label>
                <input type="text" className="form-control" ></input>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="inputEmail">Email</label>
                <input type="email" className="form-control" ></input>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="inputAddress">Dirección</label>
                <input type="text" className="form-control" ></input>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="inputPhone">Teléfono</label>
                <input type="text" className="form-control" ></input>
            </div>

            <button type="submit" className="btn btn-primary">Crear Contacto</button>

        </form>
       </div>

    )
}

export default Contactos;