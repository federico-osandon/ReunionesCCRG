import {useState ,useEffect} from 'react'
import ModalComponent from './ModalComponent'
  

export default function ReunionDetalle({reunion, actualizar, boolActu}) {
    const {nombre, dia, fecha, cantidadPersonas} = reunion 
    const [actualizarReuDetalle, setActualizarReuDetalle] = useState(false)   

    return (
        <div className="container text-center">
            <h1>{reunion.nombre}</h1>
            <h2>Día: {reunion.dia}</h2>
            <h3>Fecha: {reunion.fecha.slice(0, 10)}</h3>
            <h3>Lugares Disponibes: {reunion.cantidadPersonas-reunion.cantPerRegis}</h3>   
            <ModalComponent 
                reunion={reunion}
                boolActu={boolActu}
                actualizar={actualizar}
            />       
        </div>
    )
}
