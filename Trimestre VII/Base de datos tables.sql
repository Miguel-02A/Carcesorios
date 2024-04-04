drop database if exists Carcesorios;

create database Carcesorios character set utf8mb4 collate utf8mb4_unicode_ci;

use Carcesorios;

-- ---------------------------------------------------------------------------------------------

create table titulos(
id_titulo int primary key auto_increment,
nombre_titulo varchar(50) collate utf8mb4_unicode_ci not null
)character set utf8mb4 collate utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------------------------

create table categorias(
id_categorias int primary key auto_increment,
nombre_categoria varchar(50) collate utf8mb4_unicode_ci not null,
url_imagen_categoria varchar(50) collate utf8mb4_unicode_ci not null
)character set utf8mb4 collate utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------------------------

create table informacion_contacto(
id_contacto int primary key auto_increment,
telefono varchar(10) collate utf8mb4_unicode_ci not null,
correo varchar(60) collate utf8mb4_unicode_ci not null
)character set utf8mb4 collate utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------------------------

create table productos(
id_producto int primary key auto_increment,
nombre_producto varchar(50) collate utf8mb4_unicode_ci not null,
precio int(15) not null,
url_imagen_producto varchar(80) collate utf8mb4_unicode_ci not null,
stock int(10) not null,
descripcion varchar(150) collate utf8mb4_unicode_ci,
descuento int(3),
iva int(3) default '19'
)character set utf8mb4 collate utf8mb4_unicode_ci;


-- ---------------------------------------------------------------------------------------------


create table detalles_factura(
id_detalles_factura int primary key auto_increment,
id_factura_f int not null,
id_producto_f int,
cantidad int(25) not null,
total int(45) not null,
FOREIGN KEY (id_factura_f) REFERENCES factura (id_factura),
FOREIGN KEY (id_producto_f) REFERENCES productos (id_producto) ON DELETE SET NULL
)character set utf8mb4 collate utf8mb4_unicode_ci;


-- ---------------------------------------------------------------------------------------------


create table factura(
id_factura int primary key auto_increment,
fecha date not null,
documento int(20),
tipo_documento varchar(5) collate utf8mb4_unicode_ci not null,
primer_nombre varchar(40) collate utf8mb4_unicode_ci not null,
segundo_nombre varchar(40) collate utf8mb4_unicode_ci not null,
primer_apellido varchar(40) collate utf8mb4_unicode_ci not null,
segundo_apellido varchar(40) collate utf8mb4_unicode_ci not null,
correo varchar(80) collate utf8mb4_unicode_ci not null,
telefono varchar(10) collate utf8mb4_unicode_ci not null,
direccion varchar(80) collate utf8mb4_unicode_ci not null,
estado_del_pago varchar(50) collate utf8mb4_unicode_ci not null default 'Pendiente de pago'
)character set utf8mb4 collate utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------------------------

create table rol(
id_rol int primary key auto_increment,
rol varchar(20) collate utf8mb4_unicode_ci 
)character set utf8mb4 collate utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------------------------

create table usuario(
documento int primary key,
tipo_documento varchar(5) collate utf8mb4_unicode_ci not null,
primer_nombre varchar(40) collate utf8mb4_unicode_ci not null,
segundo_nombre varchar(40) collate utf8mb4_unicode_ci not null,
primer_apellido varchar(40) collate utf8mb4_unicode_ci not null,
segundo_apellido varchar(40) collate utf8mb4_unicode_ci not null,
correo varchar(80) collate utf8mb4_unicode_ci not null,
telefono varchar(10) collate utf8mb4_unicode_ci not null,
direccion varchar(80) collate utf8mb4_unicode_ci not null,
contraseña blob not null,
id_rol_f int default '1',
FOREIGN KEY (id_rol_f) REFERENCES rol (id_rol)
)character set utf8mb4 collate utf8mb4_unicode_ci;


-- ---------------------------------------------------------------------------------------------


create table carrito_compras(
id_carrito_compras int primary key auto_increment,
documento_f int not null,
id_producto_f int not null,
FOREIGN KEY (documento_f) REFERENCES usuario (documento),
FOREIGN KEY (id_producto_f) REFERENCES productos (id_producto)
)character set utf8mb4 collate utf8mb4_unicode_ci;


























use carcesorios;

-- Titulos 

insert into titulos (nombre_titulo) values ('Categorías');
insert into titulos (nombre_titulo) values ('Crear cuenta');
insert into titulos (nombre_titulo) values ('Volantes');
insert into titulos (nombre_titulo) values ('Iniciar sesión');
insert into titulos (nombre_titulo) values ('Preguntas frecuentes');
insert into titulos (nombre_titulo) values ('Ofertas');
insert into titulos (nombre_titulo) values ('Palancas de cambios');
insert into titulos (nombre_titulo) values ('Alerones');
insert into titulos (nombre_titulo) values ('Tomas de aire');
insert into titulos (nombre_titulo) values ('Tubos de escape');
insert into titulos (nombre_titulo) values ('Rines');
insert into titulos (nombre_titulo) values ('Neumáticos');
insert into titulos (nombre_titulo) values ('Body kit');
insert into titulos (nombre_titulo) values ('Carrito de compras');
insert into titulos (nombre_titulo) values ('Confirmar compra');

select * From titulos;



-- categoria

insert into categorias (nombre_categoria, url_imagen_categoria) values ('Volantes Deportivos','https://i.postimg.cc/zf19td4L/1-Volante.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Palancas de Cambio','https://i.postimg.cc/gjDT7mFr/2-Palanca.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Alerones','https://i.postimg.cc/mZNJkNzR/3-Aleron.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Tomas de aire','https://i.postimg.cc/fTzF9tmd/4-T-aire.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Tubos de escape','https://i.postimg.cc/280tFk7K/5-T-escape.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Rines de lujo','https://i.postimg.cc/t4fmwBfd/6-Rines.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Llantas deportivas','https://i.postimg.cc/YSWyH1K5/7-Llantas.png');
insert into categorias (nombre_categoria, url_imagen_categoria) values ('Body kit','https://i.postimg.cc/Z50MwGfK/8-Body-kit.png');

select * From categorias;



-- Informacion de contacto

insert into informacion_contacto (telefono,correo) values ('3211233212','Carcesorios@hotmail.com');

select * From informacion_contacto;



-- Productos

-- Volantes

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante cafe tipo madera',700546,'https://i.postimg.cc/J4v6RJ9c/1-Volante.png','10','volante ferrari - tipo madera','15');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante ergonómico negro','400321','https://i.postimg.cc/NjXNFFth/2-Volante.png','10','volante ergonomico deportivo negro - amarillo','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante negro básico','305547','https://i.postimg.cc/0Q9xZhnQ/3-Volante.png','10','volante basico negro - plata ','16');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante blanco BMW','983599','https://i.postimg.cc/t4VXg37X/4-Volante.png','10','volante BMW negro - blanco','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante camuflaje militar','509999','https://i.postimg.cc/85wGYwXb/5-Volante.png','10','volante militar negro - camuflado ','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante negro con lineas amarillas','400509','https://i.postimg.cc/PqsdvC81/6-Volante.png','10','volante básico negro - lineas amarillas ','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante negro deportivo','600999','https://i.postimg.cc/q7s4sp8S/7-Volante.png','10','volante deportivo negro - gris ','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Volante deportivo azul','333616','https://i.postimg.cc/T1wxvmZv/8-Volante.png','10','volante deportivo azul - negro ','0');

-- Palanca

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios gris ',700546,'https://i.postimg.cc/gjDT7mFr/2-Palanca.png','10','Palanca de cambios de 5 velocidades gris - negro','15');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios gris','400321','https://i.postimg.cc/TwYBLX0V/2-Palanca.png','10','Palanca de cambios de 6 velocidades gris - rojo - negro','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios gris','305547','https://i.postimg.cc/ydQt0rpw/3-Palanca.png','10','Palanca de cambios de 5 velocidades gris','16');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios gris plata','983599','https://i.postimg.cc/FH5qbSGs/4-Palanca.png','10','Palanca de cambios de 5 velocidades gris plata','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios blanca','509999','https://i.postimg.cc/15N2NBGj/5-Palanca.png','10','Palanca de cambios de 6 velocidades blanca','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios negro mate','400509','https://i.postimg.cc/mkKn51sj/6-Palanca.png','10','Palanca de cambios de 5 velocidades negro - blanco','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios negro mate ','600999','https://i.postimg.cc/QCFPmkRV/7-Palanca.png','10','Palanca de cambios de 5 velocidades negro','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Palanca de cambios negra','333616','https://i.postimg.cc/CM291Xq8/8-Palanca.png','10','Palanca de cambios automática  negro - gris - rojo','0');

-- Aleron

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro recto','300000','https://i.postimg.cc/qRsptwCX/1-Aleron.png','10','Aleron deportivo negro mate','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro fibra de carbono','459999','https://i.postimg.cc/c1cs0DWd/2-Aleron.png','3','Aleron deportivo en fibra de carbono','10');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro mate bajo','380000','https://i.postimg.cc/qMMpR8By/3-Aleron.png','19','Aleron deportivo negro mate','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron gris curvo','230000','https://i.postimg.cc/ZK74yC0g/4-Aleron.png','30','Aleron curvo de lugo gris','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron fibra de carbono grande','500000','https://i.postimg.cc/wMFH2B21/5-Aleron.png','2','Aleron deportivo en fibra de carbono','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro pequeño','210000','https://i.postimg.cc/j2RtyfHV/6-Aleron.png','23','Aleron pequeño de lujo negro','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro tipo aleta','199000','https://i.postimg.cc/jSBTZmH4/7-Aleron.png','31','Aleron tipo aleta de lujo gris','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Aleron negro alto','250000','https://i.postimg.cc/pLmxQRFd/8-Aleron.png','18','Aleron deportivo negro','5');

-- Toma de aire

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire negra con un solo escape','120000','https://i.postimg.cc/ydrRkV4z/1-T-aire.png','10','Toma de aire negra','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire negra metalica','89999','https://i.postimg.cc/ZKNN5tw1/2-T-aire.png','19','Toma de aire negra metalica','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire con dos escapes','110000','https://i.postimg.cc/GpX85cps/3-T-aire.png','30','Toma de aire doble negra','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire pequeña con dos escapes','140000','https://i.postimg.cc/5yhFSn27/4-T-aire.png','13','Toma de aire pequeña negra','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire con dos escapes con pequeño escape','130000','https://i.postimg.cc/d0sZ67JY/5-T-aire.png','18','Toma de aire doble pequeña negra','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire con dos escapes tipo escalonado','150000','https://i.postimg.cc/FHQLfWq1/6-T-aire.png','14','Toma de aire en fibra de carbono','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire negro pequeño','124900','https://i.postimg.cc/1R26S5rG/7-T-aire.png','18','Toma de aire pequeña negra','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire de fibra de carbono negra pequeña','180000','https://i.postimg.cc/2SFBndRG/8-T-aire.png','28','Toma de aire pequeña en fibra de carbono','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Toma de aire grande de metal','200000','https://i.postimg.cc/brDtnKpS/9-Toma-de-aire.webp','9','Toma de aire metalica ','0');

-- Tubo de escape 

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape',700546,'https://i.postimg.cc/wvfsjf1t/1-T-escape.png','10','Tubos de escape con doble salida gris plata','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape doble salida','400321','https://i.postimg.cc/kMHbrHrz/2-T-escape.png','10','Tubo de escape con doble salida gris plata','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape plata','305547','https://i.postimg.cc/kG2R6QST/3-T-escape.png','10','Tubo de escape con recamara plateado','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape doble salida','983599','https://i.postimg.cc/RZ5JhnZT/4-T-escape.png','10','Tubo de escape en titanio doble salida','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape doble salida','509999','https://i.postimg.cc/NFZ91K7B/5-T-escape.png','10','Tubo de escape doble salida metálico','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape grande','400509','https://i.postimg.cc/sDZZ3JsX/6-T-escape.png','10','Tubo de escape en titanio grande','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape doble salida','600999','https://i.postimg.cc/ZqJ9Ft3B/7-T-escape.png','10','Tubo de escape en titanio doble salida','8');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Tubo de escape doble salida','333616','https://i.postimg.cc/8zRJ6PFg/8-T-escape.png','10','Tubo de escape doble salida metalico','0');

-- Rines

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 17 en aluminio',700546,'https://i.postimg.cc/1XR0XVRt/1-Rines.png','10','Rin de lujo negro gris','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 14 metalico','400321','https://i.postimg.cc/pr0fFVyB/2-Rines.png','10','Rin de lujo gris plata','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 15 metalico','305547','https://i.postimg.cc/KYnt5DRj/3-Rines.png','10','Rin de lujo cromado','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 16 en aluminio','983599','https://i.postimg.cc/jqvQ9cvJ/4-Rines.png','10','Rin de lujo negro - gris','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 17 en aluminio','509999','https://i.postimg.cc/QMLp5yNv/5-Rines.png','10','Rin de lujo negro - rojo','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 17 en aluminio','400509','https://i.postimg.cc/Z5v8WSmr/6-Rines.png','10','Rin de lujo negro','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 17 metálico','600999','https://i.postimg.cc/Hsh0WLqY/7-Rines.png','10','Rin de lujo metálico gris oscuro - gris plata','8');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Rin 15 metalico','333616','https://i.postimg.cc/pXTYtj1c/8-Rines.png','10','Rin de lujo negro','0');

-- Neumáticos

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático todo terreno',700546,'https://i.postimg.cc/6Qf6DHty/1-llantas.png','10','Neumático todo terreno grabber','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático de pista','400321','https://i.postimg.cc/qM6JkBpf/2-Llantas.png','10','Neumático para pista pirelli pzero','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático de automovil rin 15','305547','https://i.postimg.cc/4d44Zzxw/3-Llantas.png','10','Neumático michelin para automovil','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumáticode automovil rin 17','983599','https://i.postimg.cc/V67fNdSw/4-Llantas.png','10','Neumático para automovil con poco labrado','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático de automovil rin 17','509999','https://i.postimg.cc/C5zFnSDq/5-Llantas.png','10','Neumático para automovil deportivo','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático de pista','400509','https://i.postimg.cc/0jF9pFdH/6-Llantas.png','10','Neumático para pista pirelli pzero','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Neumático de automovil rin 17','600999','https://i.postimg.cc/CMQMTnTH/8-Llantas.png','10','Neumático michelin para automovil','8');

-- Body kit

insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de camioneta ford',700546,'https://i.postimg.cc/VNSF7f54/1-Body-kit.png','10','Body kit de camioneta ford modelos recientes','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de camioneta lexus','400321','https://i.postimg.cc/PrtzgzPC/2-Body-kit.png','10','Body kit de lujo para camioneta Lexus 2023','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de camioneta ford','305547','https://i.postimg.cc/T1xqYn0H/3-Body-kit.png','10','Body kit de camioneta ford modelos desde el 2015 en adelante','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de camioneta Toyota','983599','https://i.postimg.cc/KvJrxkMJ/4-Body-kit.png','10','Body kit de camioneta Toyota fortuner','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de automovil','509999','https://i.postimg.cc/zf9F6sgN/5-Body-kit.png','10','Body kit de automovil modelos recientes','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de camioneta Toyota','400509','https://i.postimg.cc/BbC58twZ/6-Body-kit.png','10','Body kit de camioneta Toyota modelo 2023','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de automivil BMW','509999','https://i.postimg.cc/zDwF2PXm/7-Body-kit.png','10','Body kit de BMW serie 3','0');
insert into productos (nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento) values ('Body kit de automovil','400509','https://i.postimg.cc/fLmfN8c9/8-Body-kit.png','10','Body kit de automovil carro KIA','0');


select * From productos;

select * From productos where descuento > 1;


-- detalles_factura

insert into detalles_factura (id_factura_f,id_producto_f,cantidad) values ('1','4','2');
insert into detalles_factura (id_factura_f,id_producto_f,cantidad,total) values ('1','5','1','500');
insert into detalles_factura (id_factura_f,id_producto_f,cantidad,total) values ('1','5','2','500');

SELECT MAX(id_factura) AS id_factura FROM factura;

SELECT id_factura,documento,total,estado_del_pago FROM detalles_factura INNER JOIN factura ON factura.id_factura = detalles_factura.id_factura_f;

select primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,correo,direccion,tipo_documento,documento,fecha,id_factura,nombre_producto,precio,cantidad,iva,total
from detalles_factura 
inner join factura on factura.id_factura = detalles_factura.id_factura_f
inner join productos on productos.id_producto = detalles_factura.id_producto_f
inner join usuario on usuario.documento = factura.documento_f where id_factura = 10; 


select * From detalles_factura;

DELETE from detalles_factura where id_factura_f = 1;

SELECT id_factura,total,estado_del_pago,documento FROM factura
 INNER JOIN usuario ON usuario.documento = factura.documento_f WHERE documento = 1000247923;

SELECT id_factura,documento,fecha,nombre_producto,precio,cantidad,iva FROM detalles_factura INNER JOIN factura ON factura.id_factura = detalles_factura.id_factura_f INNER JOIN productos ON productos.id_producto = detalles_factura.id_producto_f INNER JOIN usuario ON usuario.documento = factura.documento_f where documento = 1; 



SET SQL_SAFE_UPDATES = 0;

-- factura

insert into factura (fecha, total, documento_f) values ('2024-01-18','1667299','1000247923');
insert into factura (fecha, total, documento_f) values ('2024-01-18','1667299','78322436');

select * from factura;

DELETE from factura where correo_cliente_f = 'jose72@hotmail.com';

SELECT id_factura,total,estado_del_pago FROM factura;

select sum(Valor) From detalles_factura;

select primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,correo,direccion,tipo_documento,documento,fecha,id_factura,iva,total from factura inner join usuario on usuario.documento = factura.id_usuario_f where documento = 1000247923;

select * from detalles_factura inner join productos on productos.id_producto = detalles_factura.id_producto_f;


select primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,correo,direccion,tipo_documento,documento,fecha,id_factura,nombre_producto,precio,cantidad,iva,total
from detalles_factura 
inner join factura on factura.id_factura = detalles_factura.id_factura_f
inner join productos on productos.id_producto = detalles_factura.id_producto_f
inner join usuario on usuario.documento = factura.documento_f where id_factura = 10; 

select *
from detalles_factura 
inner join factura on factura.id_factura = detalles_factura.id_factura_f
inner join productos on productos.id_producto = detalles_factura.id_producto_f
inner join usuario on usuario.documento = factura.id_usuario_f; 

SELECT id_factura,total,estado_del_pago,documento FROM factura
INNER JOIN usuario ON usuario.correo = factura.correo_cliente_f; 

-- rol

insert into rol (rol) values ('Cliente');
insert into rol (rol) values ('Administrador');

select * From rol;


-- Registro

insert into usuario (documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono, direccion, contraseña) values (1000247923,'C.C','Jose','Daniel','Torres','Castro','jose72@hotmail.com','3507263948','Calle 63','Jose1234');
insert into usuario (documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono, direccion, contraseña) values (78322436,'C.C','Carlos','David','Cifuente','Castro','Car78@hotmail.com','3507263948','Calle 63','Car78jdavid');
insert into usuario (documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono, direccion, contraseña) values (7832246,'C.C','Carlos','David','prueba','Castro','Car223@hotmail.com','3507263948','Calle 63','Car78jdavid');


insert into usuario (documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, telefono, direccion, contraseña, id_rol_f) values (74307456,'C.C','Carlos','Andres','Perez','Castro','carperez2@hotmail.com','3408274937','Calle 80','carlosPer23','2');

select * From usuario;

delete from usuario where documento = 78322436;

select primer_nombre,rol,documento from usuario inner join rol on rol.id_rol = usuario.id_rol_f;


-- Carrito de compras

insert into carrito_compras (documento_f,id_producto_f) values ('1000247923','4');
insert into carrito_compras (documento_f,id_producto_f) values ('1000247923','12');

insert into carrito_compras (documento_f,id_producto_f) values ('78322436','5');
insert into carrito_compras (documento_f,id_producto_f) values ('78322436','12');

select * from carrito_compras;

select id_carrito_compras,url_imagen_producto,nombre_producto,precio
from carrito_compras 
inner join productos on productos.id_producto = carrito_compras.id_producto_f
inner join usuario on usuario.correo = carrito_compras.correo_cliente_f where documento = '78322436';

