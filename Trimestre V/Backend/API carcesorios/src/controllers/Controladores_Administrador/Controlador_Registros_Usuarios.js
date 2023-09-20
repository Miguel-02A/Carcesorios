import { getConeccion } from "../../database/database";

const getListaRegistros = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Registros = await coneccion.query("select * from usuario");
        res.json(Registros);
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


const updateUsuario= async (req, res) => {
    try{
        const { documento } = req.params;
        const {tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion,contraseña} = req.body;
       
        const datos = {tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion,contraseña};
        const coneccion = await getConeccion();
        const actualizar = await coneccion.query("UPDATE usuario SET ? WHERE documento = ?", [datos, documento]);
        res.json(actualizar);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const deleteUsuario= async (req, res) => {
    try{
        console.log(req.params);
        const { documento } = req.params;
        const coneccion = await getConeccion();
        const result = await coneccion.query("DELETE FROM usuario WHERE documento = ?", documento);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getListaRegistros,
    addUsuario,
    updateUsuario,
    deleteUsuario
};