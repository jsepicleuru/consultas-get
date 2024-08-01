const generateMovimientosQuery = (fechaInicio, fechaFin) => {
    return `
        SELECT * 
        FROM dbo.GetMovimientosCaja('${fechaInicio} 00:00:00', '${fechaFin} 23:59:59') 
        ORDER BY fecha_hora
    `
}

export { generateMovimientosQuery };