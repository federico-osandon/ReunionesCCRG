import React from 'react'
import ModalComponent from './ModalComponent'
  

export default function ReunionDetalle({reunion}) {
    const {nombre, dia, fecha, cantidadPersonas} = reunion 
    return (
        <div className="container text-center">
            <h1>{reunion.nombre}</h1>
            <h2>Día: {reunion.dia}</h2>
            <h3>Fecha: {reunion.fecha.slice(0, 10)}</h3>
            <h3>Lugares Disponibes: {reunion.cantidadPersonas}</h3>   
            <ModalComponent 
                reunion={reunion}
            />       
        </div>
    )
}
