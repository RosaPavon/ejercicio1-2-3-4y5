import { useState } from "react"


const Coches=()=>{
    let cocheblanco=[
        "Ford Blanco, coche con 4 ruedas, 2 metros de largo, 1,5 de alto y de color blanco",
              
    ]
    let cocherojo=[
        "Ford Rojo, coche con 4 ruedas, 2 metros de largo, 1,5 de alto y de color Rojo",
       
    ]
    let cocheverde=[
        "Ford Verde, coche con 4 ruedas, 2 metros de largo, 1,5 de alto y de color Verde",
      
    ]
    let cochenaranja=[
        "Ford Naranja, coche con 4 ruedas, 2 metros de largo, 1,5 de alto y de color Naranja",
       
    ]
   
    const arraycoches=[
    cocheblanco,
    cocherojo,
    cocheverde,
    cochenaranja]
    const [coches, setArraycoches] = useState([])

    return(
        <>
        <h2>Nuestros coches</h2>
        <ul>
        {
            arraycoches.map((item, index) => 
                <li key={index}>
                {item}
                </li>
            )
        }
        </ul>
        </>
    )

}
export default Coches;