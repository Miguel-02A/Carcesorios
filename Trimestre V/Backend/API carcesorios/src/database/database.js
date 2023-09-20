import mysql from "promise-mysql";
import config from "../config";


const coneccion = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password:config.password
});

const getConeccion=()=>{
    return coneccion;
};

module.exports = {
    getConeccion
};