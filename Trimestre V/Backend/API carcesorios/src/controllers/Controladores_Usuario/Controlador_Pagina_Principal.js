import { getConeccion } from "../../database/database";

const getPaginaPrincipal = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 1");
        const categorias = await coneccion.query("SELECT * FROM categorias");
        const unidos = Titulo1.concat(categorias);
        res.json(unidos);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getPaginaPrincipal
};