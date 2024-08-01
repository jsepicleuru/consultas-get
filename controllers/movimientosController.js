import ipointConnection from '../db/ipointConnection.js';
import { generateMovimientosQuery } from '../utils/queries.js';
import mssql from 'mssql'

const movimientosController = async (req, res) => {
    
    try {
        const { fechaInicio, fechaFin } = req.params;
        await ipointConnection();
        const query = generateMovimientosQuery(fechaInicio, fechaFin);
    
        const results = await mssql.query(query);
        const data = results.recordset;
    
        res.status(200).json({ 
            message: 'OK',
            data
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            message: 'Error'
        });
    }
}

export default movimientosController;