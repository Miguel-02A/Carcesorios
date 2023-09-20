import { getConeccion } from "../../database/database";

const getIniciarSesion= async (req, res) => {
    try{
        console.log(req.params);
        const { documento } = req.params;
        const coneccion = await getConeccion();
        const result = await coneccion.query("SELECT documento,contraseña FROM usuario WHERE documento = ?", documento);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getIniciarSesion
};