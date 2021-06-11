import { useState } from "react"

//ejercicio haz un listado con el contenido del array

const Lista=()=>{
    const arrayanimales=['Perro','Elefante','Marmota']
    const [animales, setArrayanimales] = useState([])

    return(
        <>
        <h2>Animales</h2>
        <ul>
        {
            arrayanimales.map((item, index) => 
                <li key={index}>
                {item}
                </li>
            )
        }
        </ul>
        </>
    )

}
export default Lista;