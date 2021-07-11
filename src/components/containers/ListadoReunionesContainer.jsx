import React, {useState, useEffect} from 'react'
import { getFirestore } from '../../Firebase/firebaseConfig'
import firebase from 'firebase/app'
import ListadoReuniones from '../ListadoReuniones/ListadoReuniones'
import { promesaReuniones } from '../../utils/mockReuniones'
import './ReunionDetalleContainer'

function ListadoReunionesContainer() {
    const [reunionesList, setReunionesList] = useState([])
    const [loading, setLoading] = useState(true)
    const db= getFirestore()  
    const fechaHoy = new Date() 
    

    useEffect(() => {         
        db.collection('reuniones').orderBy("fecha", "desc").get()//where('fecha', '>=', `${fechaHoy}`)
        .then(reu => { //console.log(reu);
            setReunionesList(reu.docs.map(reunion => ({...reunion.data(), id: reunion.id, fecha: reunion.data().fecha.toDate().toISOString()}))) 
            setLoading(false)
        })                         
        // promesaReuniones
        // .then(resp => setReunionesList(resp))
         
}, [])

    // console.log(fechaHoy);
    console.log(reunionesList);
    return (
        <>
            {loading 
                ? 
                    <div class="d-flex align-items-center justify-content-center w-100">
                        <strong>Loading... </strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>
                :
                    <ListadoReuniones listadoReuniones={reunionesList}/>
            }
        </>
    )
}

export default ListadoReunionesContainer
