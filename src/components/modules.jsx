import React from 'react';
import '../App.scss'

export const Modules = ()=>{
    return (
        <div className='contentDiv'>
            <div className='row'>
                <div className='col-md-6'>
                    <a href='/bike' className="btn module-button module">Bike</a>
                </div>
                <div className='col-md-6'>
                    <a href='/jwellery' className="btn module-button module">Jwellery</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <a className="btn module-button module">Electronics</a>
                </div>
                <div className='col-md-6'>
                    <a className="btn module-button module">Sports Equipement</a>
                </div>
            </div>
        </div>
    );
}