import React from 'react'
import FormularioTurno from '../components/FormularioTurnoReuniones/FormularioTurno'
import ListadoTurnos from '../components/ListadoTurnos/ListadoTurnos'

function Home() {
    return (
        <>
          <FormularioTurno /> 
          <ListadoTurnos />
        </>
    )
}

export default Home
