import app from "./app";

const main=()=>{
    app.listen(app.get("port"));
    console.log(`El puerto del servidor es: ${app.get("port")}`);
};

main();