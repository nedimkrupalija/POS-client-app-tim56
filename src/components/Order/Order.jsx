import React, { useState } from 'react';
import './Order.css';

const Order = () => {
    
    return (
        <>
        <div className='list-orders'>
            <h2 className='tables-title'>ORDERS</h2>
            <div className='buttons-container'>
                <button className='buttons'>LIST ORDERS</button>
                <button className='buttons'>CREATE NEW ORDER</button>
            </div>
        <div className='table'>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>VAT price</th>
                        <th>Total Price (Excluding VAT)</th>
                        <th>Total Price (Including VAT)</th>
                        <th>Location ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>15</td>
                        <td>nesto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>0.5</td>
                        <td>2</td>
                        <td>2.5</td>
                        <td>7</td>
                        <td>nesto</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

        </>
    );
};

export default Order;