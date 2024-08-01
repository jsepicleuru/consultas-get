import mssql from 'mssql'
import 'dotenv/config.js'

const ipointConnection = async () => {
    const config = {
        user: process.env.IPOINT_USER,
        password: process.env.IPOINT_PASSWORD,
        database: process.env.IPOINT_DATABASE,
        server: process.env.IPOINT_SERVER,
        options: {
            encrypt: true,
            trustServerCertificate: true,
            requestTimeout: 300000
        }
    }
    try {
        await mssql.connect(config)
    } catch (error) {
        console.log(`${error}\n`)
    }
}

export default ipointConnection;