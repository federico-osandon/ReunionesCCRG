import React from 'react'
import {NavLink} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
//import NavLink from 'react-bootstrap/NavLink'


function Menu() {
    return (
        <>
            <Navbar
                className="bg-warning shadow-lg" 
                collapseOnSelect 
                expand="lg" 
                //bg="dark" 
                variant="dark"
                //style={{ color:'white' }}
            >
                <img src="/assets/img/LogoeEdm.png" style={{width: '45px'}} />
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >
                            <NavLink 
                                to={'/'} 
                                className="btn"
                                style={{color:'white'}}
                            >
                                Listado Reuniones
                            </NavLink>   
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink 
                                to={'/crearreunion'} 
                                className="btn"   
                                style={{color:'white'}}                             
                            >
                                Crear Runión
                            </NavLink>  
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    
        {/* <Navbar >  
            <NavLink 
                to={'/'} 
                className="btn"
                activeClassName=""
            >
                Listado Reuniones
            </NavLink>      
            <NavLink 
                to={'/crearreunion'} 
                className="btn"
                activeClassName=""
            >
                Crear Runión
            </NavLink>        
            <NavLink to={''} className="btn">Listado Personas</NavLink>
            
        </Navbar> */}
        </>
    )
}

export default Menu
