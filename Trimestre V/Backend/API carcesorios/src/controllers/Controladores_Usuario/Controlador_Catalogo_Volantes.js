import { getConeccion } from "../../database/database";

const getCatalogo_Volantes = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo3 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 3");
        const categorias = await coneccion.query("select id_producto,nombre_producto,precio,url_imagen_producto from productos where nombre_producto like '%Volante%';");
        const unidos = Titulo3.concat(categorias);
        res.json(unidos);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getCatalogo_Volantes
};