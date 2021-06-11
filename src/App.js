
import './App.css';
import React, {useState} from 'react'
//ejercicio 1
//import Persona from './Persona'
//ejercicio 2
//import Lista from './Lista'
//ejercicio 3
//import Coches from './Coches'
//ejercicio 5
import arrayusuario from './arrayusuario'
import { getNodeText } from '@testing-library/dom';


//ejercicio1
/*function App(props) {
  return (
    <Persona 
    nombre="Salsa dance party" 
    fecha="24/07/2020"
    hora= "16:00"
    direccion="Done Bikendi Kalea, 2"
    ciudad= "Bilbao"
    />
  );
}*/

//ejercicio 2
/*function App(props) {
  return (
    <Lista />
  );
}*/

//ejercicio 3
/*function App(props) {
  return (
    <Coches />
  );
}*/

//ejercicio4, haz que se sume un número

/*function App() {

  let [numero, setNumero] = useState(1);

  return (
    <>
      <h1>{numero}</h1>
      <button onClick={function(){setNumero(numero + 1)}}>Click</button>
    </>
  )
}*/

//ejercicio 5

function App(props) {
  let [contador, setContador] =useState(0)

  function next(){
    if(contador <2){
      setContador(contador+1)//si el contador es uno
    }else{//la función es manipular el contador
      setContador(0)
    }
  }

  if(contador===0){
    return(
      <>
      <h1>{arrayusuario[0]}</h1>
      <button onClick={next}>Cambio</button>
      </>
  
    )
  }else if(contador===1){
    return(
      <>
      <h1>{arrayusuario[1]}</h1>
      <button onClick={next}>Cambio</button>
      </>
  
    )
  }else{
    return(
      <>
      <h1>{arrayusuario[2]}</h1>
      <button onClick={next}>Cambio</button>
      </>
  
    )
  }

 
}

export default App;
