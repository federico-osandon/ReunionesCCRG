import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import { useReactToPrint } from "react-to-print";
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase/firebaseConfig'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import './ListadoTurnos.css'





function ListadoTurnos({setCambioAsiste,listadoPersonas, cambioAsiste, estadoReunion,setEstadoReunion}) {
    //const [listadoPersonas, setListadoPersonas] = useState([])
    //const [reunion, setReunion] = useState({})
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const {idreunion} = useParams()
    
    const db = getFirestore() 
    //ESto es parte del componente para el pdf
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    
    
    const handlerAsiste = async (personaId, asiste) => {
        //console.log('dando de baja', personaId)
        setLoadingSubmit(true)
        const docRefPersona = db.collection("personas").doc(personaId)        
        const docRefReunion = db.collection("reuniones").doc(idreunion) 
        docRefReunion.get() 
        .then(reu => {
            setEstadoReunion({...reu.data(), id: idreunion, fecha: reu.data().fecha.toDate().toISOString()})                
            
        })     
        if (asiste===1) {           
            await docRefPersona.update({ asiste: 2, })             
            await docRefReunion.update({ cantPerRegis: estadoReunion.cantPerRegis - 1})  
            .then(res=>setLoadingSubmit(false)  )        
        }else if(estadoReunion.cantidadPersonas - estadoReunion.cantPerRegis > 0){
            await docRefPersona.update({ asiste: 1 })  
            await docRefReunion.update({ cantPerRegis: estadoReunion.cantPerRegis + 1 })
            .then(res=>setLoadingSubmit(false)  ) 
             
        }else{
            alert('no hay mas lugar')
            setLoadingSubmit(false)
        }
        setCambioAsiste(!cambioAsiste) 
        
    }

    return (        
            <section className="seccion-listadoturnos">
            <div className="container">
                <h2 className="text-center mb-5"></h2>
                {listadoPersonas.length===0 
                ? 
                    <h1 className="text-center" >No hay personas anotadas para esta reunión...</h1>                         
                :   
                    <>                                         
                        <Table 
                            className="table-responsive shadow-lg rounded" 
                            striped bordered hover variant="light"
                            ref={componentRef}
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre y Apellido</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    
                                    <th>ACCIÓN</th>
                                    <th>Asistencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listadoPersonas.map((persona,idx)=>(
                                    <tr key={persona.id}>
                                        <td>{idx+1 }</td>
                                        <td>{persona.nombre}</td>
                                        <td>{persona.email}</td>
                                        <td>{persona.tel}</td>
                                        <td>
                                            {loadingSubmit ?
                                                <div className="text-center">
                                                    <Button variant="primary" disabled>
                                                        <Spinner
                                                        as="span"
                                                        animation="grow"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                        />
                                                        Loading...
                                                    </Button>
                                                </div>
                                            :
                                                <button 
                                                    onClick={ () => handlerAsiste(persona.id, persona.asiste) }
                                                    htmlFor="" 
                                                    className = {persona.asiste === 1
                                                                    ? 'btn btn-danger btn-block'
                                                                    : 'btn btn-success btn-block'
                                                                }
                                                >
                                                    {persona.asiste===1 ? 'BAJA': 'ALTA'}
                                                </button>
                                            }
                                        </td>
                                       <td>
                                       <button                                            
                                            className = { 'btn btn-danger btn-block'}
                                        >
                                            No
                                        </button>
                                       </td>
                                    </tr>
                                ))}
                                                        
                            </tbody>
                        </Table>                    
                        <button className="btn btn-success btn-block" onClick={handlePrint}>DESCARGAR</button>
                        <Link to='/'>
                            <button className="btn btn-primary btn-block mt-3">VOLVER</button>                        
                        </Link>
                    </>
                }               
            </div>
        </section>
            
    )
}

export default ListadoTurnos
