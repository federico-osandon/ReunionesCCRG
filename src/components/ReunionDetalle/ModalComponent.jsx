import React, {useState} from 'react'
import { getFirestore } from '../../Firebase/firebaseConfig'
import firebase from 'firebase/app'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ModalComponent({reunion={}, actualizar, boolActu}) {
    console.log(reunion)
    const [value, setValue] = useState(reunion)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //console.log(value);
    const handleChange =(e)=>{
        return(
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        )
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        let fechaGardar = new Date(value.fecha)
        //fechaGardar.setHours(9) 
        fechaGardar.setMinutes(fechaGardar.getMinutes() + fechaGardar.getTimezoneOffset())
        const db= getFirestore()
        db.collection('reuniones').doc(reunion.id).update({
            ...value,
            fecha: firebase.firestore.Timestamp.fromDate(fechaGardar)
        })
        actualizar(!boolActu)
        handleClose()

    }

    return (
        <>
            <Button  variant="warning" onClick={handleShow}>
                MODIFICAR REUNION
            </Button>
    
            <Modal 
                show={show} 
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modificar Reunión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="border border-warning p-3 rounded">

                        <Form 
                            onChange={handleChange}
                            //onSubmit={handlerSubmit} 
                        >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre de la Reunión</Form.Label>
                                <Form.Control 
                                    name="nombre"
                                    type="text" 
                                    placeholder="Ingrese el Nombre de la Reunion" 
                                    size="sm" 
                                    defaultValue={value.nombre}
                                    
                                />
                                <Form.Text className="text-muted">
                                Nombre de la reunion.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Día</Form.Label>
                                <Form.Control 
                                    name="dia"
                                    type="text" 
                                    size="sm" 
                                    placeholder="Ingrese el Dia de la Reunion"
                                    defaultValue={value.dia} 
                                />
                                <Form.Text className="text-muted">
                                Día de la reunión.
                                </Form.Text>
                            </Form.Group>                
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>FECHA</Form.Label>
                                <Form.Control 
                                    name="fecha"
                                    type="date" 
                                    size="sm" 
                                    //value={value.fecha}
                                />
                                <Form.Text className="text-muted">
                                Volver a colocar la Fecha de la reunión.
                                </Form.Text>
                            </Form.Group>                
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>HORA</Form.Label>
                                <Form.Control 
                                    name="hora"
                                    type="text" 
                                    size="sm" 
                                    placeholder="Ingrese la hora de la Reunion"
                                    defaultValue={value.hora} 
                                />
                                <Form.Text className="text-muted">
                                Hora de la reunión.
                                </Form.Text>
                            </Form.Group>                
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>CANTIDAD DE PERSONAS</Form.Label>
                                <Form.Control 
                                    name="cantidadPersonas"
                                    type="number" 
                                    size="sm" 
                                    placeholder="Ingrese el núm. de personas" 
                                    min={1} 
                                    max={50} 
                                    defaultValue={value.cantidadPersonas}
                                />
                                <Form.Text className="text-muted">
                                En la cantidad de personas no estan incluidas el staff.
                                </Form.Text>
                            </Form.Group>
                            {/* {//loading ? 
                                    <Button className="btn btn-block" variant="success" type="submit">
                                        Submit
                                    </Button>
                                //: 
                                    <Button variant="primary" disabled block > 
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>
                            }              */}
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    CERRAR
                    </Button>
                    <Button 
                        variant="warning" 
                        type="submit"
                        onClick={handlerSubmit}
                        //onClick={handleClose}
                    >
                        GUARDAR CAMBIOS
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent
