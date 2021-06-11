import { useState } from "react"

//ejercicio haz un listado con el contenido del array

const Usuarios=()=>{
    let arrayUsuario=['Bruce','Clark','Diana']
    const [usuario, setArrayUsuario] = useState([])


var count_click = 0;

function count_click_add() {
  count_click += 1;
}

if(count_click==0){
    return(
        <>
        <h1>{arrayUsuario[0]}</h1>
        <button onClick={count_click_add()}>Cambio</button>
    
        </>
    )
  }else if(count_click==1){
    return(
        <>
        <h1>{arrayUsuario[1]}</h1>
        <button onClick={count_click_add()}>Cambio</button>
    
        </>
    )}else if(count_click==3){
        var count_click = 0}


    

}
export default Usuarios;