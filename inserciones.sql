CALL insertar_usuarios('Julieth Campos Perez', 'juliethcp22@gmail.com', MD5('juli2208'),'22/08/2003');
CALL insertar_usuarios('Allan Gonzalez Jarquin', 'allang@gmail.com', MD5('allan123'),'27/02/2001');
CALL insertar_usuarios('Nicole Jara Gonzalez', 'nicolejara09@gmail.com', MD5('nico0912'),'09/12/2001');
CALL insertar_usuarios('Sofía Ramírez Martínez', 'sofia.ramirez@gmail.com', MD5('passwor1'), '10/01/1992');
CALL insertar_usuarios('Miguel Torres Castro', 'miguel.torres@gmail.com', MD5('abcdefg2'), '03/12/1988');
CALL insertar_usuarios('Laura Gómez Hernández', 'laura.gomez@gmail.com', MD5('hello123'), '12/05/1997');
CALL insertar_usuarios('Carlos López González', 'carlos.lopez@gmail.com', MD5('pass1234'), '08/11/1990');
CALL insertar_usuarios('María Rodríguez Martínez', 'maria.rodriguez@gmail.com', MD5('abcd1234'), '06/02/1985');
CALL insertar_usuarios('Pedro Morales Vargas', 'pedro.morales@gmail.com', MD5('qwertyui'), '11/05/1998');
CALL insertar_usuarios('Isabel Mendoza Torres', 'isabel.mendoza@gmail.com', MD5('passw0rd'), '04/07/1993');
CALL insertar_usuarios('Juan Sánchez Herrera', 'juan.sanchez@gmail.com', MD5('98765432'), '09/08/1987');
CALL insertar_usuarios('Ana Jiménez Ruiz', 'ana.jimenez@gmail.com', MD5('hola1234'), '03/12/1996');
CALL insertar_usuarios('Javier Castro Mora', 'javier.castro@gmail.com', MD5('abcd9876'), '07/11/1991');
CALL insertar_usuarios('Lucía Torres Medina', 'lucia.torres@gmail.com', MD5('psword12'), '01/07/1999');

select * from usuarios

SELECT pg_get_serial_sequence('Usuarios', 'id');

SELECT SETVAL('public.usuarios_id_seq', 1);

CALL insertar_grupo_muscular('Pectorales');
CALL insertar_grupo_muscular('Espalda');
CALL insertar_grupo_muscular('Piernas');
CALL insertar_grupo_muscular('Brazos');
CALL insertar_grupo_muscular('Hombros');
CALL insertar_grupo_muscular('Abdominales');
CALL insertar_grupo_muscular('Glúteos');
CALL insertar_grupo_muscular('Trapecio');
CALL insertar_grupo_muscular('Gemelos');
CALL insertar_grupo_muscular('Deltoides');
CALL insertar_grupo_muscular('Triceps');
CALL insertar_grupo_muscular('Cardio');

select * from gruposmusculares

CALL insertar_ejercicio(1, 'Press de banca', 'El press de banca es un ejercicio clásico para desarrollar los pectorales. Consiste en acostarse en un banco horizontal, sujetar una barra con pesas y bajarla hasta que el pecho casi la toque, y luego empujarla hacia arriba.', 'https://i.imgur.com/bBH7VBt.gif');
CALL insertar_ejercicio(1, 'Flexiones de pecho', 'Las flexiones de pecho son un ejercicio calisténico que se realiza en el suelo. Consiste en apoyar las manos a la anchura de los hombros, estirar las piernas y mantener el cuerpo recto mientras se baja y se sube el pecho hacia el suelo.', 'https://i.imgur.com/u7wbhFO.gif');
CALL insertar_ejercicio(2, 'Dominadas', 'Las dominadas son un ejercicio excelente para trabajar la espalda. Se realiza suspendido de una barra y consiste en subir el cuerpo hasta que la barbilla sobrepase la barra, y luego bajar de nuevo controladamente.', 'https://i.imgur.com/XPRdgdn.gif');
CALL insertar_ejercicio(2, 'Remo con mancuerna', 'El remo con mancuerna es un ejercicio de espalda que se realiza inclinando el torso hacia adelante, sosteniendo una mancuerna en una mano y levantándola hacia el torso, manteniendo el codo cerca del cuerpo. Luego se alterna con la otra mano.', 'https://i.imgur.com/bnwgBvH.gif');
CALL insertar_ejercicio(3, 'Sentadillas', 'Las sentadillas son un ejercicio básico para las piernas. Se realiza de pie, con los pies separados al ancho de los hombros, y se baja el cuerpo flexionando las rodillas y la cadera, manteniendo la espalda recta.', 'https://i.imgur.com/tDxZyOQ.gif');
CALL insertar_ejercicio(3, 'Zancadas', 'Las zancadas son un ejercicio que trabaja los músculos de las piernas y glúteos. Se realiza dando un paso largo hacia adelante, doblando ambas rodillas hasta que la pierna trasera quede cerca del suelo, y luego se regresa a la posición inicial.', 'https://i.imgur.com/r4uq1OM.gif');
CALL insertar_ejercicio(4, 'Curl de bíceps con mancuernas', 'El curl de bíceps con mancuernas es un ejercicio clásico para los brazos. Se realiza de pie, sosteniendo una mancuerna en cada mano, y doblando los codos para levantar las mancuernas hacia los hombros.', 'https://i.imgur.com/yEfegoM.gif');
CALL insertar_ejercicio(5, 'Press militar', 'El press militar es un ejercicio para los hombros. Se realiza de pie, sosteniendo una barra con pesas a la altura de los hombros, y se empuja la barra hacia arriba hasta extender los brazos.', 'https://i.imgur.com/DIVeERW.gif');
CALL insertar_ejercicio(5, 'Elevaciones laterales', 'Las elevaciones laterales son un ejercicio para los hombros. Se realiza de pie, sosteniendo mancuernas a los lados del cuerpo, y se levantan los brazos hacia los lados hasta la altura de los hombros.', 'https://i.imgur.com/fBNcRab.gif');
CALL insertar_ejercicio(6, 'Plancha abdominal', 'La plancha abdominal es un ejercicio para fortalecer los abdominales. Se realiza apoyando los antebrazos y los dedos de los pies en el suelo, manteniendo el cuerpo recto y en posición horizontal durante un tiempo determinado.', 'https://i.imgur.com/e0FBl0S.gif');
CALL insertar_ejercicio(6, 'Crunch de abdominales', 'El crunch de abdominales es un ejercicio clásico para trabajar los abdominales. Se realiza acostado en el suelo, con las piernas flexionadas y las manos detrás de la cabeza, y se levanta el torso contrayendo los abdominales.', 'https://i.imgur.com/46rnzNr.gif');
CALL insertar_ejercicio(7, 'Sentadillas sumo', 'Las sentadillas sumo son un ejercicio que pone énfasis en los glúteos y los músculos internos de los muslos. Se realiza de pie, con los pies separados más allá del ancho de los hombros y los dedos de los pies apuntando hacia afuera, y se baja el cuerpo flexionando las rodillas.', 'https://i.imgur.com/oVQLOh3.gif');
CALL insertar_ejercicio(7, 'Puentes de glúteos', 'Los puentes de glúteos son un ejercicio para fortalecer los glúteos. Se realiza acostado en el suelo, con las rodillas flexionadas y los pies apoyados en el suelo, y se levanta la pelvis hasta formar una línea recta con el cuerpo.', 'https://i.imgur.com/CbiMIrs.gif');
CALL insertar_ejercicio(8, 'Encogimientos de hombros', 'Los encogimientos de hombros son un ejercicio para trabajar el trapecio. Se realiza de pie, sosteniendo una barra con pesas o mancuernas frente al cuerpo, y se elevan los hombros hacia las orejas, manteniendo los brazos extendidos.', 'https://i.imgur.com/pYozANB.gif');
CALL insertar_ejercicio(9, 'Elevaciones de talones', 'Las elevaciones de talones son un ejercicio para los gemelos. Se realiza de pie, apoyando los dedos de los pies en un escalón o plataforma, y se elevan los talones lo más alto posible, contrayendo los músculos de los gemelos.', 'https://i.imgur.com/QyxUwYC.gif');
CALL insertar_ejercicio(9, 'Saltos de tijera', 'Los saltos de tijera son un ejercicio que involucra los gemelos. Se realiza de pie, dando un salto lateral para separar las piernas y los brazos, y luego otro salto para juntarlos.', 'https://i.imgur.com/KI2EysJ.gif');
CALL insertar_ejercicio(10, 'Press Arnold', 'El press Arnold es un ejercicio que trabaja los deltoides. Se realiza sentado, sosteniendo una mancuerna en cada mano, y se elevan las mancuernas hacia arriba mientras se giran los brazos hasta que queden en posición vertical.', 'https://i.imgur.com/HBBJwbQ.gif');
CALL insertar_ejercicio(12, 'Burpees', 'Los burpees son un ejercicio de cuerpo completo que combina flexiones, saltos y sentadillas. Se realiza empezando de pie, luego agachándose en posición de sentadilla, apoyando las manos en el suelo, estirando las piernas hacia atrás en una posición de flexión, haciendo una flexión, volviendo a la posición de sentadilla y saltando hacia arriba.', 'https://i.imgur.com/XZRuJ5m.gif');

CALL insertar_ejercicio(6, 'Plancha lateral', 'La plancha lateral es un ejercicio que fortalece los abdominales y los músculos estabilizadores. Se realiza apoyando el antebrazo y el pie de un lado del cuerpo, manteniendo el cuerpo recto y en posición lateral durante un tiempo determinado.', 'https://i.imgur.com/ffJ6fCR.gif');
CALL insertar_ejercicio(12, 'Mountain climbers', 'Los mountain climbers son un ejercicio de cardio y fortalecimiento. Se realiza en posición de flexión, alternando las piernas hacia el pecho en un movimiento rápido y continuo, como si estuvieras corriendo en el lugar.', 'https://i.imgur.com/uJ1hPNS.gif');
CALL insertar_ejercicio(3, 'Saltos al cajón', 'Los saltos al cajón son un ejercicio de plyometrics que fortalece las piernas y mejora la explosividad. Se realiza saltando con ambos pies para subir a un cajón o plataforma y luego bajando de manera controlada.', 'https://i.imgur.com/HSYyzir.gif');
CALL insertar_ejercicio(7, 'Desplantes laterales', 'Los desplantes laterales son un ejercicio que trabaja las piernas y los glúteos. Se realiza dando un paso lateral hacia un lado, doblando la rodilla de la pierna que se mueve y manteniendo la otra pierna estirada. Luego se regresa a la posición inicial y se repite del otro lado.', 'https://i.imgur.com/cE6JKnG.gif');
CALL insertar_ejercicio(11, 'Flexiones diamante', 'Las flexiones diamante son una variante de las flexiones tradicionales que trabajan principalmente los tríceps. Se realiza apoyando las manos cerca una de la otra, formando un diamante con los pulgares y los dedos índices, y luego realizando flexiones manteniendo los codos cerca del cuerpo.', 'https://i.imgur.com/zXEUyVN.gif');
CALL insertar_ejercicio(7, 'Sentadilla con salto', 'La sentadilla con salto es un ejercicio que combina fuerza y explosividad. Se realiza empezando en posición de sentadilla, luego se impulsa hacia arriba con fuerza, saltando lo más alto posible y aterrizando suavemente de nuevo en posición de sentadilla.', 'https://i.imgur.com/MyG54Gs.gif');
CALL insertar_ejercicio(6, 'Plancha con elevación de pierna', 'La plancha con elevación de pierna es un ejercicio que fortalece los abdominales y los glúteos. Se realiza en posición de plancha, levantando una pierna hacia arriba y manteniendo el cuerpo recto. Luego se baja la pierna y se repite con la otra pierna.', 'https://i.imgur.com/F6sdZuu.gif');
CALL insertar_ejercicio(12, 'Skipping', 'El skipping es un ejercicio de cardio que simula la acción de correr en el lugar. Se realiza elevando las rodillas alternativamente hacia el pecho a un ritmo rápido y constante.', 'https://i.imgur.com/DqSJIV7.gif');
CALL insertar_ejercicio(6, 'Plancha con rotación', 'La plancha con rotación es un ejercicio que trabaja los abdominales, los hombros y los oblicuos. Se realiza en posición de plancha, luego se gira el cuerpo hacia un lado extendiendo el brazo hacia arriba, manteniendo la posición y luego se repite del otro lado.', 'https://i.imgur.com/oy0Awvq.gif');

CALL insertar_ejercicio(7, 'Sentadillas búlgaras', 'Las sentadillas búlgaras son un ejercicio unilateral que trabaja las piernas y los glúteos. Se realiza con una pierna flexionada hacia atrás y apoyada en un banco o plataforma, mientras se realiza una sentadilla con la otra pierna.', 'https://i.imgur.com/f60VnOB.gif');
CALL insertar_ejercicio(1, 'Flexiones declinadas', 'Las flexiones declinadas son una variante desafiante de las flexiones tradicionales que enfatizan los músculos del pecho. Se realiza colocando los pies en un banco o plataforma elevada y las manos en el suelo, y luego realizar flexiones con el cuerpo en una posición inclinada.', 'https://i.imgur.com/64jYYH9.gif');
CALL insertar_ejercicio(5, 'Caminata del oso', 'La caminata del oso es un ejercicio de cuerpo completo que trabaja los abdominales, los hombros y los brazos. Se realiza en posición de flexión, luego se camina hacia adelante y hacia atrás con las manos y los pies, manteniendo el cuerpo en una posición elevada y paralela al suelo.', 'https://i.imgur.com/UD43qWa.gif');
CALL insertar_ejercicio(6, 'Elevaciones de piernas colgado', 'Las elevaciones de piernas colgado son un ejercicio para fortalecer los abdominales inferiores. Se realiza colgándose de una barra con las manos, luego se elevan las piernas hacia arriba sin balanceo y se descienden de manera controlada.', 'https://i.imgur.com/YltQEiq.gif');
CALL insertar_ejercicio(11, 'Flexiones en pica', 'Las flexiones en pica son un ejercicio avanzado que trabaja los hombros, los tríceps y los abdominales. Se realiza en posición de plancha, elevando las caderas hacia el techo y formando una V invertida con el cuerpo, luego se realizan flexiones con los codos hacia atrás.', 'https://i.imgur.com/TNJjwtY.gif');
CALL insertar_ejercicio(12, 'Saltos de rodillas al pecho', 'Los saltos de rodillas al pecho son un ejercicio explosivo que trabaja las piernas y el abdomen. Se realiza saltando y llevando las rodillas hacia el pecho en el aire, luego se aterriza suavemente y se repite el movimiento.', 'https://i.imgur.com/VJIcNfL.gif');
CALL insertar_ejercicio(7, 'Planck con piernas alternas', 'El planck con piernas alternas es un ejercicio que fortalece los abdominales, los glúteos y los músculos estabilizadores. Se realiza en posición de plancha, luego se levanta una pierna hacia atrás manteniendo el cuerpo recto y se alterna con la otra pierna.', 'https://i.imgur.com/VP6DDuH.gif');
CALL insertar_ejercicio(3, 'Desplantes con salto', 'Los desplantes con salto son un ejercicio que trabaja las piernas, los glúteos y el equilibrio. Se realiza dando un paso largo hacia adelante en posición de desplante, luego se salta cambiando de pierna en el aire y se aterriza en un desplante con la otra pierna.', 'https://i.imgur.com/5kFrB6D.gif');
CALL insertar_ejercicio(11, 'Fondos en paralelas', 'Los fondos en paralelas son un ejercicio que trabaja principalmente los tríceps y los músculos de los hombros y el pecho. Se realiza apoyando las manos en unas barras paralelas y bajando el cuerpo hasta que los codos formen un ángulo de 90 grados, luego se empuja el cuerpo hacia arriba.', 'https://i.imgur.com/0P5lxRU.gif');
CALL insertar_ejercicio(4, 'Plancha con extensión de brazo', 'La plancha con extensión de brazo es un ejercicio que fortalece los abdominales, los brazos y los hombros. Se realiza en posición de plancha con las manos en el suelo, luego se extiende un brazo hacia adelante y se mantiene la posición, luego se alterna con el otro brazo.', 'https://i.imgur.com/KkVeZvl.gif');

CALL insertar_ejercicio(11, 'Correr en el lugar', 'Correr en el lugar es una excelente opción de cardio que puedes hacer en cualquier momento y lugar. Simplemente levanta las rodillas y alterna los pies como si estuvieras corriendo sin moverte del sitio.', 'https://i.imgur.com/b0o4J6n.gif');
CALL insertar_ejercicio(11, 'Saltar la cuerda', 'Saltar la cuerda es un ejercicio clásico de cardio que puedes hacer en cualquier lugar. Utiliza una cuerda de saltar adecuada para tu altura y salta a un ritmo constante, levantando los pies del suelo y rotando la cuerda con las muñecas.', 'https://i.imgur.com/XqEddvX.gif');
CALL insertar_ejercicio(7, 'Patadas de burro', 'Las patadas de burro son un ejercicio de cardio que se centra en los músculos de las piernas y los glúteos. Comienza en posición de gateo a cuatro patas y levanta una pierna hacia atrás, extendiéndola y llevándola lo más alto posible. Alterna las piernas en cada repetición.', 'https://i.imgur.com/8VoA3zz.giff');


select * from ejercicios
SELECT * FROM ejercicios WHERE idgrupomuscular = 11;



CALL insertar_rutina('Rutina de cardio');
CALL insertar_rutina('Rutina de entrenamiento funcional');
CALL insertar_rutina('Rutina de tonificación muscular');
CALL insertar_rutina('Rutina de entrenamiento de resistencia');
CALL insertar_rutina('Rutina de entrenamiento de cuerpo completo');
CALL insertar_rutina('Rutina de entrenamiento de piernas');
CALL insertar_rutina('Rutina de entrenamiento de brazos');
CALL insertar_rutina('Rutina de entrenamiento de espalda');
CALL insertar_rutina('Rutina de entrenamiento de pecho');
CALL insertar_rutina('Rutina de entrenamiento de abdominales');
CALL insertar_rutina('Rutina de entrenamiento de glúteos');


SELECT pg_get_serial_sequence('rutinas', 'id');

-- Reinicia el valor de la secuencia a 1
SELECT setval('public.rutinas_id_seq', 1);

select * from rutinas;

CALL insertar_rutina_ejercicio(1, 3, 15, NULL);


--/////////////////////////RUTINA CARDIO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(2::SMALLINT, 4::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 6::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 7::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 20::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 26::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 24::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 33::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(2::SMALLINT, 21::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 35::SMALLINT, 15::SMALLINT, null);

--//////////////////////RUTINA ENTRENAMIENTO FUNCIONAL\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(3::SMALLINT, 3::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 4::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(3::SMALLINT, 5::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 6::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 7::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 8::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 9::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 10::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 20::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 23::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 24::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 25::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 26::SMALLINT, null, '00:00:40');
CALL insertar_rutina_ejercicio(3::SMALLINT, 34::SMALLINT, null, '00:00:40');
CALL insertar_rutina_ejercicio(3::SMALLINT, 35::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 36::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 37::SMALLINT, null, '00:01:00');

--//////////////////////RUTINA TONIFICACION MUSCULAR \\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(3::SMALLINT, 2::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 8::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(3::SMALLINT, 9::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 10::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 12::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 14::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 15::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 16::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 19::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 22::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 24::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 25::SMALLINT, 15::SMALLINT, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 28::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 29::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 36::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 37::SMALLINT, null, '00:01:00');

--//////////////////////RUTINA RESISTENCIA \\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(5::SMALLINT, 12::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 14::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(5::SMALLINT, 15::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 16::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 19::SMALLINT, NULL,  '00:01:00');
CALL insertar_rutina_ejercicio(5::SMALLINT, 20::SMALLINT, NULL, '00:00:40');
CALL insertar_rutina_ejercicio(5::SMALLINT, 21::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 22::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 25::SMALLINT, NULL, '00:00:40');
CALL insertar_rutina_ejercicio(5::SMALLINT, 28::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 32::SMALLINT, 12::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(5::SMALLINT, 33::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 34::SMALLINT, null, '00:01:00');

select * from rutina_ejercicios
