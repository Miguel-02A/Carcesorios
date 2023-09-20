import { getConeccion } from "../../database/database";

const getCrearCuenta = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo2 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 2");
        res.json(Titulo2);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};


const addUsuario = async (req, res) => {
    try{
        const {documento,tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion,contraseña} = (req.body);

        const usuario = {documento,tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion,contraseña}
        const coneccion = await getConeccion();
        const result=await coneccion.query("INSERT INTO usuario SET ?", usuario);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    getCrearCuenta,
    addUsuario
};