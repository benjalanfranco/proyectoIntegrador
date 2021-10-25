CREATE SCHEMA RedSocial;

USE RedSocial;

CREATE TABLE Usuarios (
id int(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
Usuario varchar(25) UNIQUE KEY not null,
Nombre varchar(20) not null,
Apellido varchar(25) not null,
Email varchar(320) not null,
Contrasena varchar(40) not null,
Num_telefono varchar(15),
Nacimiento date not null,
Foto_perfil varchar(120)
);

CREATE TABLE Comentarios(
id int(10) unsigned not null PRIMARY KEY AUTO_INCREMENT,
idPost int(10) not null,
idUsuario int (10) not null,
Fecha date not null,
Comentario varchar (150) not null,
FOREIGN KEY (idPost) references Posts(id),
FOREIGN KEY (idUsuario) references Usuarios(id)
);

CREATE TABLE Categoria(
id int(10) unsigned PRIMARY KEY AUTO_INCREMENT,
Categ varchar(20) not null
);

CREATE TABLE `Posts` (
  `idPosts` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Usuario_id` int(10) unsigned,
  `Ubicacion` varchar(45) DEFAULT NULL,
  `Imagen` varchar(45) DEFAULT NULL,
  `Descripcion` text,
  `Fecha` datetime DEFAULT NULL,
  `CategoriaId` int(10) unsigned,
  PRIMARY KEY (`idPosts`),
  FOREIGN KEY (`Usuario_id`)
  REFERENCES `RedSocial`.`Usuarios` (`id`),
  FOREIGN KEY (`CategoriaId`)
  REFERENCES `RedSocial`.`Categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `RedSocial`.`Posts` 
ADD COLUMN `Likes` INT(10) UNSIGNED NOT NULL AFTER `Imagen`;

INSERT INTO Categoria values
(DEFAULT, 'Futbol'),
(DEFAULT, 'Tenis'),
(DEFAULT, 'Rugby'),
(DEFAULT, 'Volley'),
(DEFAULT, 'Basquet'),
(DEFAULT, 'Golf'),
(DEFAULT, 'Otro');

INSERT INTO Usuarios values
(DEFAULT, 'liomessi', 'Lionel', 'Mesi', 'lapulga@gmail.com', 'AntonellaTiagoMateoCiro', 1138293845, '1987-06-24'),
(DEFAULT, 'eldibu', 'Emiliano', 'Martinez', 'dibu@gmail.com', 'Miraquetecomo', 1140732833, '1992-09-02'),
(DEFAULT, 'cristiano', 'Cristiano', 'Ronaldo', 'cristiano@cr7.com', 'Elbicho', 1183937384, '1985-02-05'),
(DEFAULT, 'pedritoperez', 'Pedro Raul', 'Perez', 'pedroperez@gmail.com', 'ax3929rZYn', 1183740243, '1992-09-21'),
(DEFAULT, 'alexiamennes', 'Alexia', 'Mennes', 'alexiamennes@icloud.com', 'jwfcn87fNJD9', 1183048473, 
'1998-01-28'),
(DEFAULT, 'marceloalegri', 'Marcelo','Alegri', 'marceloalegri@gmail.com', 'Micuenta123', 1153948071, '1972-11-25');

INSERT INTO Comentarios values
(DEFAULT, 3, 2, '2021-09-21', 'Que lindo es el deporte!'),
(DEFAULT, 1, 1, '2021-09-21', 'Soy fan'),
(DEFAULT, 2, 4, '2021-09-21', 'Tremendooooo'),
(DEFAULT, 3, 1, '2021-09-21', 'Epica foto'),
(DEFAULT, 5, 3, '2021-09-21', 'Loveeee');

INSERT INTO Posts values
(DEFAULT, 5, 'Lisboa', '', 1900918,'Unas olitas para sanar el alma', '2021-07-21', 7),
(DEFAULT, 4, 'Ohio', '', 381, 'Probando cosas nuevas', '2021-08-13', 3),
(DEFAULT, 1, 'Rosario', '', 781982,'Disfrutando ultimos dias en casa. Totalmente agradecido por todo.', '2021-08-05', 1),
(DEFAULT, 6, 'Montevideo', '', 218,'Un grande Lucho!! Ejemplo de grandeza y humildad', '2021-02-22', 1),
(DEFAULT, 5, 'Buenos Aires', '', 781982,'Ya en casa! Cuarentenando :/ ', '2021-08-16', 1),
(DEFAULT, 4, 'Miami', '', 539,'Volviendo a mi habitat naturalll', '2021-09-08', 7),
(DEFAULT, 2, 'Old Traford', '', 314277,'A seguir disfrutando con el equipo. @cristiano abrazo grande.', '2021-09-26', 1),
(DEFAULT, 4, 'Augusta National', '', 612,'Sueno cumplido! Les manda un saludo a todos Phil!!', '2021-04-12', 6),
(DEFAULT, 1, 'San Antonio', '', 781982,'Con el mejor deportista argentino ed los ultimos tiempos! Un lujo', '2021-08-05', 5),
(DEFAULT, 3, 'Ibiza', '', 1284544,'Disfrute en familia. A volver con todo. Suuu', '2021-06-03', 1);










