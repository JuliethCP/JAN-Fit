
insert into Usuarios (nombre, correo, contrasena, fechaNacimiento)
values ('Allan Gonzalez', 'allang@gmail.com', MD5('contra78'),'09/12/2001')


select * from Usuarios

-- Obtén el nombre de la secuencia asociada a la columna SERIAL
SELECT pg_get_serial_sequence('ejercicios', 'id');

-- Reinicia el valor de la secuencia a 1
SELECT setval('public.ejercicios_id_seq', 1);

CREATE TABLE GruposMusculares (
    id SERIAL PRIMARY KEY,
    nomGrupoMuscular VARCHAR(50)
);

CREATE TABLE Ejercicios(
	id SERIAL PRIMARY KEY,
	--idGrupoMuscular int,
    nombreEjercicio VARCHAR(50),
	descripcion VARCHAR(100),
	gif varchar(50),
	
);

CREATE TABLE Ejercicios_GrpMuscular(
	idEjercicio INT,
	idGrupoMuscular INT,
	
	FOREIGN KEY (idEjercicio) REFERENCES Ejercicios(id),
	FOREIGN KEY (idGrupoMuscular) REFERENCES GruposMusculares(id)
);

ALTER TABLE ejercicios
alter COLUMN duracion time,
ADD COLUMN tiempoDescanso time;

select * from gruposmusculares
CREATE TABLE Rutinas(
	id serial PRIMARY KEY,
	nombreRutina varchar(50)

);

UPDATE Rutinas
SET tipo = 'glúteos'
WHERE rutinas.id = 12;

select * from Rutinas;

CREATE TABLE Rutina_Ejercicios(
	idRutina smallint,
	idEjercicio smallint,
	repeticiones smallint,
	tiempo time,
	
	FOREIGN KEY (idRutina) REFERENCES Rutinas(id),
	FOREIGN KEY (idEjercicio) REFERENCES Ejercicios(id)
);

ALTER TABLE Rutinas
ADD COLUMN repeticiones TYPE,
ALTER COLUMN tiempo DROP NOT NULL;


CREATE TABLE Progreso(
	id serial PRIMARY KEY,
	idUser int,
	peso smallint,
	altura float,
	IMC float,
	
	FOREIGN KEY (idUser) REFERENCES Usuarios(id)
);

CREATE TABLE Usuario_Rutina(
	id serial PRIMARY KEY,
	idUser int,
	idRutina int,

	FOREIGN KEY (idUser) REFERENCES Usuarios(id),
	FOREIGN KEY (idRutina) REFERENCES Rutinas(id)
);

create table gif(
	gif varchar(50)
);

insert into gif values('https://imgur.com/YFS5Z2r');

select * from gif
--/////////////////////////////////////////////////////////////////////////
CREATE OR REPLACE PROCEDURE insertar_usuarios(
    nombre varchar(100),
	correo varchar(100),
	contrasena varchar(32),
	fechanacimiento varchar(10)
)
AS $$
BEGIN
    INSERT INTO Usuarios (nombre, correo, contrasena, fechaNacimiento)
    VALUES (nombre, correo, contrasena, fechanacimiento );
END;
$$ LANGUAGE plpgsql;
--------------------------------
CREATE OR REPLACE PROCEDURE insertar_grupo_muscular(
    nombre_grupo VARCHAR(50)
)
AS $$
BEGIN
    INSERT INTO GruposMusculares("nomGrupoMuscular")
    VALUES (nombre_grupo);
END;
$$ LANGUAGE plpgsql;

------------------------------
CREATE OR REPLACE PROCEDURE insertar_ejercicio(
    nombre_ejercicio VARCHAR(50),
    descripcion VARCHAR(100),
    gif VARCHAR(50)
)
AS $$
BEGIN
    INSERT INTO Ejercicios ( nombreEjercicio, descripcion, gif)
    VALUES ( nombre_ejercicio, descripcion, gif);
END;
$$ LANGUAGE plpgsql;
-----------------------


CREATE OR REPLACE PROCEDURE insertar_ejercicio_grpmuscular(
    idEjercicio INT,
    idGrupoMuscular INT
)
AS $$
BEGIN
    INSERT INTO Ejercicios_GrpMuscular (idEjercicio, idGrupoMuscular)
    VALUES (idEjercicio, idGrupoMuscular);
END;
$$ LANGUAGE plpgsql;
---------------------
CREATE OR REPLACE PROCEDURE insertar_rutina(
    nombre_rutina VARCHAR(50),
	duracion time,
	tiempodescanso time,
	tipo varchar(30)
)
AS $$
BEGIN
    INSERT INTO Rutinas (nombreRutina, duracion, tiempodescanso, tipo)
    VALUES (nombre_rutina, duracion, tiempodescanso, tipo);
END;
$$ LANGUAGE plpgsql;
select * from rutinas
CALL insertar_rutina('Rutina cardio 2', '00:40:00','00:01:00', 'cardio' );
-----------------

CREATE OR REPLACE PROCEDURE insertar_rutina_ejercicio(
    id_rutina SMALLINT,
    id_ejercicio SMALLINT,
    repeticiones SMALLINT DEFAULT NULL,
    tiempo TIME DEFAULT NULL
)
AS $$
BEGIN
    INSERT INTO Rutina_Ejercicios (idRutina, idEjercicio, repeticiones, tiempo)
    VALUES (id_rutina, id_ejercicio, repeticiones, tiempo);
END;
$$ LANGUAGE plpgsql;

-------------------
CREATE OR REPLACE PROCEDURE insertar_progreso(
    id_usuario INT,
    peso int,
    altura FLOAT,
    imc FLOAT
)
AS $$
BEGIN
    INSERT INTO Progreso (idUser, peso, altura, IMC)
    VALUES (id_usuario, peso, altura, imc);
END;
$$ LANGUAGE plpgsql;

-----------------------
CREATE OR REPLACE PROCEDURE insertar_usuario_rutina(
    id_usuario INT,
    id_rutina INT
)
AS $$
BEGIN
    INSERT INTO Usuario_Rutina (idUser, idRutina)
    VALUES (id_usuario, id_rutina);
END;
$$ LANGUAGE plpgsql;
--------







