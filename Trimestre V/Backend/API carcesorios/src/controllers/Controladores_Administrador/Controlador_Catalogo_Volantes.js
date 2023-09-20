import { getConeccion } from "../../database/database";

const getCatalogoVolantesAdmin = async(req,res) =>{
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

const addVolante = async (req, res) => {
    try{
        const {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento} = (req.body);

        const Volante = {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento}
        const coneccion = await getConeccion();
        const agregar=await coneccion.query("INSERT INTO productos SET ?", Volante);
        res.json(agregar);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


const updateProducto= async (req, res) => {
    try{
        const { id_producto } = req.params;
        const {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento} = req.body;
       
        const datos = {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento};
        const coneccion = await getConeccion();
        const actualizar = await coneccion.query("UPDATE productos SET ? WHERE id_producto = ?", [datos, id_producto]);
        res.json(actualizar);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteProducto= async (req, res) => {
    try{
        console.log(req.params);
        const { id_producto } = req.params;
        const coneccion = await getConeccion();
        const result = await coneccion.query("DELETE FROM productos WHERE id_producto = ?", id_producto);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getCatalogoVolantesAdmin,
    addVolante,
    updateProducto,
    deleteProducto
};