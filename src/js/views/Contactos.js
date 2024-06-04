import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Contactos = () =>{

    const {store,actions} = useContext(Context)
    console.log("estos son los contactos", store.contacts)


    
    return (
        <h1>Contactos</h1>

    )
}

export default Contactos;