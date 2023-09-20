import { getConeccion } from "../../database/database";

const getPaginaPrincipalAdmin = async(req,res) =>{
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


const addCategoria = async (req, res) => {
    try{
        const {nombre_categoria,url_imagen_categoria} = (req.body);

        const categoria = {nombre_categoria,url_imagen_categoria}
        const coneccion = await getConeccion();
        const agregar=await coneccion.query("INSERT INTO categorias SET ?", categoria);

        res.json(agregar);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


const updateCategoria= async (req, res) => {
    try{
        const { id_categorias } = req.params;
        const {nombre_categoria,url_imagen_categoria} = req.body;
       
        const datos = {nombre_categoria,url_imagen_categoria};
        const coneccion = await getConeccion();
        const actualizar = await coneccion.query("UPDATE categorias SET ? WHERE id_categorias = ?", [datos, id_categorias]);
        res.json(actualizar);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


const deleteCategoria= async (req, res) => {
    try{
        console.log(req.params);
        const { id_categorias } = req.params;
        const coneccion = await getConeccion();
        const result = await coneccion.query("DELETE FROM categorias WHERE id_categorias = ?", id_categorias);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    getPaginaPrincipalAdmin,
    addCategoria,
    updateCategoria,
    deleteCategoria
};