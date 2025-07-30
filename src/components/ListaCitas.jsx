import React from 'react';
import ItemCita from './ItemCita';

const ListaCitas = ({citas, borrarCita}) => {
    return (
        <div className='row mt-4'>
            {
                citas.map((item, indice)=>(
                    <div className='col-md-4 mb-4 mx-5 mt-4 align-items-center'>
                    <ItemCita key={indice} cita={item} borrarCita={borrarCita}></ItemCita>
                </div>
                ))
            }
        </div>
    );
};

export default ListaCitas;