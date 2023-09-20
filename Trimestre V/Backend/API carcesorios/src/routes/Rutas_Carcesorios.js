import { Router } from "express";
// Usuario
import { methods as paginaPrincipal } from "../controllers/Controladores_Usuario/Controlador_Pagina_Principal";
import { methods as paginaVolantes } from "../controllers/Controladores_Usuario/Controlador_Catalogo_Volantes";
import { methods as paginaRegistro } from "../controllers/Controladores_Usuario/Controlador_Registro";
// Administrador
import { methods as paginaPrincipalAdmin } from "../controllers/Controladores_Administrador/Controlador_Pagina_Principal";
import { methods as paginaVolantesAdmin } from "../controllers/Controladores_Administrador/Controlador_Catalogo_Volantes";



const router = Router();

// Usuario

router.get("/", paginaPrincipal.getPaginaPrincipal);
router.get("/volantes", paginaVolantes.getCatalogo_Volantes);
router.get("/CrearCuenta", paginaRegistro.getCrearCuenta);
router.post("/CrearCuenta", paginaRegistro.addUsuario);

// Administrador

router.get("/ADMIN", paginaPrincipalAdmin.getPaginaPrincipalAdmin);
router.post("/ADMIN", paginaPrincipalAdmin.addCategoria);
router.put("/ADMIN/:id_categorias", paginaPrincipalAdmin.updateCategoria);
router.delete("/ADMIN/:id_categorias", paginaPrincipalAdmin.deleteCategoria);

router.get("/ADMIN/volantes", paginaVolantesAdmin.getCatalogoVolantesAdmin);
router.post("/ADMIN/volantes", paginaVolantesAdmin.addVolante);
router.put("/ADMIN/volantes/:id_producto", paginaVolantesAdmin.updateProducto);
router.delete("/ADMIN/volantes/:id_producto", paginaVolantesAdmin.deleteProducto);


export default router;