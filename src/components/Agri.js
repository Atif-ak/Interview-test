import React from 'react';
import './Agri.css'
import Dropdown from '../components/dropdown/Dropdown'

const Agri = ()=>{
    return (
        <div className="agri">
            <h2>Agri-Input Purchase Requests</h2>
            <div className="states">
                <div className="pend">PENDING</div>
                <div className="exec">EXECUTING</div>
                <div className="executed">EXCECUTED</div>
                <div className="comp">COMPLETED</div>
            </div>
            <div className="batches">
                <div className="undo">Undo Batch</div>
                <div className="assign">Assign Suppliers</div>
                <div className="po">Generate PO</div>
            </div>
            <div className="orders">
                <div className="exec-order">Executing Agri-Input Orders</div>
                <div className="bached-by">Batched By</div>
            </div>
            <hr></hr>
            <Dropdown/>
        </div>
    )
}
export default Agri