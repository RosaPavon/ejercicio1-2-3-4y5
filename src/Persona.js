
function Persona(props){
    return (
        <div>
            <p>Nombre: {props.nombre}</p>
            <p>fecha: {props.fecha}</p>
            <p>hora: {props.hora}</p>
            <p>direccion: {props.direccion}</p>
            <p>ciudad: {props.ciudad}</p>

        </div>
    )
}

export default Persona;