import express from "express";
import morgan from "morgan";

//Rutas

import CarcesoriosRutas from "./routes/Rutas_Carcesorios";


const app = express();

app.set("port",3000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/carcesorios", CarcesoriosRutas);

export default app;