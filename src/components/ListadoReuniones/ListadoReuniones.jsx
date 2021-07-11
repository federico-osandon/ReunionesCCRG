import React from 'react'
import ReunionCard from './ReunionCard';

function ListadoReuniones({listadoReuniones}) {   
    const style= {
        marginRight: '0',
        marginLeft: '0'
    } 
    //console.log(listadoReuniones);
    return (        
        <>  
            <div className="row justify-content-center" style={style}>
                {listadoReuniones.map(reunion => <ReunionCard key={reunion.id} reunion={reunion}/>)}
            </div>
        </>
    )
}
export default ListadoReuniones
