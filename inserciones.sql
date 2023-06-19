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
CALL insertar_grupo_muscular('Bicep');
CALL insertar_grupo_muscular('Oblicuos');

select * from gruposmusculares
SELECT pg_get_serial_sequence('gruposmusculares', 'id');

SELECT SETVAL('public.gruposmusculares_id_seq', 1);

CALL insertar_ejercicio('Press de banca', 'El press de banca es un ejercicio clásico para desarrollar los pectorales. Consiste en acostarse en un banco horizontal, sujetar una barra con pesas y bajarla hasta que el pecho casi la toque, y luego empujarla hacia arriba.', 'https://i.imgur.com/bBH7VBt.gif');
CALL insertar_ejercicio('Flexiones de pecho', 'Las flexiones de pecho son un ejercicio calisténico que se realiza en el suelo. Consiste en apoyar las manos a la anchura de los hombros, estirar las piernas y mantener el cuerpo recto mientras se baja y se sube el pecho hacia el suelo.', 'https://i.imgur.com/u7wbhFO.gif');
CALL insertar_ejercicio('Dominadas', 'Las dominadas son un ejercicio excelente para trabajar la espalda. Se realiza suspendido de una barra y consiste en subir el cuerpo hasta que la barbilla sobrepase la barra, y luego bajar de nuevo controladamente.', 'https://i.imgur.com/XPRdgdn.gif');
CALL insertar_ejercicio('Remo con mancuerna', 'El remo con mancuerna es un ejercicio de espalda que se realiza inclinando el torso hacia adelante, sosteniendo una mancuerna en una mano y levantándola hacia el torso, manteniendo el codo cerca del cuerpo. Luego se alterna con la otra mano.', 'https://i.imgur.com/bnwgBvH.gif');
CALL insertar_ejercicio('Sentadillas', 'Las sentadillas son un ejercicio básico para las piernas. Se realiza de pie, con los pies separados al ancho de los hombros, y se baja el cuerpo flexionando las rodillas y la cadera, manteniendo la espalda recta.', 'https://i.imgur.com/tDxZyOQ.gif');
CALL insertar_ejercicio('Zancadas', 'Las zancadas son un ejercicio que trabaja los músculos de las piernas y glúteos. Se realiza dando un paso largo hacia adelante, doblando ambas rodillas hasta que la pierna trasera quede cerca del suelo, y luego se regresa a la posición inicial.', 'https://i.imgur.com/r4uq1OM.gif');
CALL insertar_ejercicio('Curl de bíceps con mancuernas', 'El curl de bíceps con mancuernas es un ejercicio clásico para los brazos. Se realiza de pie, sosteniendo una mancuerna en cada mano, y doblando los codos para levantar las mancuernas hacia los hombros.', 'https://i.imgur.com/yEfegoM.gif');
CALL insertar_ejercicio('Press militar', 'El press militar es un ejercicio para los hombros. Se realiza de pie, sosteniendo una barra con pesas a la altura de los hombros, y se empuja la barra hacia arriba hasta extender los brazos.', 'https://i.imgur.com/DIVeERW.gif');
CALL insertar_ejercicio('Elevaciones laterales', 'Las elevaciones laterales son un ejercicio para los hombros. Se realiza de pie, sosteniendo mancuernas a los lados del cuerpo, y se levantan los brazos hacia los lados hasta la altura de los hombros.', 'https://i.imgur.com/fBNcRab.gif');
CALL insertar_ejercicio('Plancha abdominal', 'La plancha abdominal es un ejercicio para fortalecer los abdominales. Se realiza apoyando los antebrazos y los dedos de los pies en el suelo, manteniendo el cuerpo recto y en posición horizontal durante un tiempo determinado.', 'https://i.imgur.com/e0FBl0S.gif');
CALL insertar_ejercicio('Crunch de abdominales', 'El crunch de abdominales es un ejercicio clásico para trabajar los abdominales. Se realiza acostado en el suelo, con las piernas flexionadas y las manos detrás de la cabeza, y se levanta el torso contrayendo los abdominales.', 'https://i.imgur.com/46rnzNr.gif');
CALL insertar_ejercicio('Sentadillas sumo', 'Las sentadillas sumo son un ejercicio que pone énfasis en los glúteos y los músculos internos de los muslos. Se realiza de pie, con los pies separados más allá del ancho de los hombros y los dedos de los pies apuntando hacia afuera, y se baja el cuerpo flexionando las rodillas.', 'https://i.imgur.com/oVQLOh3.gif');
CALL insertar_ejercicio('Puentes de glúteos', 'Los puentes de glúteos son un ejercicio para fortalecer los glúteos. Se realiza acostado en el suelo, con las rodillas flexionadas y los pies apoyados en el suelo, y se levanta la pelvis hasta formar una línea recta con el cuerpo.', 'https://i.imgur.com/CbiMIrs.gif');
CALL insertar_ejercicio('Encogimientos de hombros', 'Los encogimientos de hombros son un ejercicio para trabajar el trapecio. Se realiza de pie, sosteniendo una barra con pesas o mancuernas frente al cuerpo, y se elevan los hombros hacia las orejas, manteniendo los brazos extendidos.', 'https://i.imgur.com/pYozANB.gif');
CALL insertar_ejercicio('Elevaciones de talones', 'Las elevaciones de talones son un ejercicio para los gemelos. Se realiza de pie, apoyando los dedos de los pies en un escalón o plataforma, y se elevan los talones lo más alto posible, contrayendo los músculos de los gemelos.', 'https://i.imgur.com/QyxUwYC.gif');
CALL insertar_ejercicio('Saltos de tijera', 'Los saltos de tijera son un ejercicio que involucra los gemelos. Se realiza de pie, dando un salto lateral para separar las piernas y los brazos, y luego otro salto para juntarlos.', 'https://i.imgur.com/KI2EysJ.gif');
CALL insertar_ejercicio('Press Arnold', 'El press Arnold es un ejercicio que trabaja los deltoides. Se realiza sentado, sosteniendo una mancuerna en cada mano, y se elevan las mancuernas hacia arriba mientras se giran los brazos hasta que queden en posición vertical.', 'https://i.imgur.com/HBBJwbQ.gif');
CALL insertar_ejercicio('Burpees', 'Los burpees son un ejercicio de cuerpo completo que combina flexiones, saltos y sentadillas. Se realiza empezando de pie, luego agachándose en posición de sentadilla, apoyando las manos en el suelo, estirando las piernas hacia atrás en una posición de flexión, haciendo una flexión, volviendo a la posición de sentadilla y saltando hacia arriba.', 'https://i.imgur.com/XZRuJ5m.gif');

CALL insertar_ejercicio('Plancha lateral', 'La plancha lateral es un ejercicio que fortalece los abdominales y los músculos estabilizadores. Se realiza apoyando el antebrazo y el pie de un lado del cuerpo, manteniendo el cuerpo recto y en posición lateral durante un tiempo determinado.', 'https://i.imgur.com/ffJ6fCR.gif');
CALL insertar_ejercicio('Mountain climbers', 'Los mountain climbers son un ejercicio de cardio y fortalecimiento. Se realiza en posición de flexión, alternando las piernas hacia el pecho en un movimiento rápido y continuo, como si estuvieras corriendo en el lugar.', 'https://i.imgur.com/uJ1hPNS.gif');
CALL insertar_ejercicio('Saltos al cajón', 'Los saltos al cajón son un ejercicio de plyometrics que fortalece las piernas y mejora la explosividad. Se realiza saltando con ambos pies para subir a un cajón o plataforma y luego bajando de manera controlada.', 'https://i.imgur.com/HSYyzir.gif');
CALL insertar_ejercicio('Desplantes laterales', 'Los desplantes laterales son un ejercicio que trabaja las piernas y los glúteos. Se realiza dando un paso lateral hacia un lado, doblando la rodilla de la pierna que se mueve y manteniendo la otra pierna estirada. Luego se regresa a la posición inicial y se repite del otro lado.', 'https://i.imgur.com/cE6JKnG.gif');
CALL insertar_ejercicio('Flexiones diamante', 'Las flexiones diamante son una variante de las flexiones tradicionales que trabajan principalmente los tríceps. Se realiza apoyando las manos cerca una de la otra, formando un diamante con los pulgares y los dedos índices, y luego realizando flexiones manteniendo los codos cerca del cuerpo.', 'https://i.imgur.com/zXEUyVN.gif');
CALL insertar_ejercicio('Sentadilla con salto', 'La sentadilla con salto es un ejercicio que combina fuerza y explosividad. Se realiza empezando en posición de sentadilla, luego se impulsa hacia arriba con fuerza, saltando lo más alto posible y aterrizando suavemente de nuevo en posición de sentadilla.', 'https://i.imgur.com/MyG54Gs.gif');
CALL insertar_ejercicio('Plancha con elevación de pierna', 'La plancha con elevación de pierna es un ejercicio que fortalece los abdominales y los glúteos. Se realiza en posición de plancha, levantando una pierna hacia arriba y manteniendo el cuerpo recto. Luego se baja la pierna y se repite con la otra pierna.', 'https://i.imgur.com/F6sdZuu.gif');
CALL insertar_ejercicio('Skipping', 'El skipping es un ejercicio de cardio que simula la acción de correr en el lugar. Se realiza elevando las rodillas alternativamente hacia el pecho a un ritmo rápido y constante.', 'https://i.imgur.com/DqSJIV7.gif');
CALL insertar_ejercicio('Plancha con rotación', 'La plancha con rotación es un ejercicio que trabaja los abdominales, los hombros y los oblicuos. Se realiza en posición de plancha, luego se gira el cuerpo hacia un lado extendiendo el brazo hacia arriba, manteniendo la posición y luego se repite del otro lado.', 'https://i.imgur.com/oy0Awvq.gif');

CALL insertar_ejercicio('Sentadillas búlgaras', 'Las sentadillas búlgaras son un ejercicio unilateral que trabaja las piernas y los glúteos. Se realiza con una pierna flexionada hacia atrás y apoyada en un banco o plataforma, mientras se realiza una sentadilla con la otra pierna.', 'https://i.imgur.com/f60VnOB.gif');
CALL insertar_ejercicio('Flexiones declinadas', 'Las flexiones declinadas son una variante desafiante de las flexiones tradicionales que enfatizan los músculos del pecho. Se realiza colocando los pies en un banco o plataforma elevada y las manos en el suelo, y luego realizar flexiones con el cuerpo en una posición inclinada.', 'https://i.imgur.com/64jYYH9.gif');
CALL insertar_ejercicio('Caminata del oso', 'La caminata del oso es un ejercicio de cuerpo completo que trabaja los abdominales, los hombros y los brazos. Se realiza en posición de flexión, luego se camina hacia adelante y hacia atrás con las manos y los pies, manteniendo el cuerpo en una posición elevada y paralela al suelo.', 'https://i.imgur.com/UD43qWa.gif');
CALL insertar_ejercicio('Elevaciones de piernas colgado', 'Las elevaciones de piernas colgado son un ejercicio para fortalecer los abdominales inferiores. Se realiza colgándose de una barra con las manos, luego se elevan las piernas hacia arriba sin balanceo y se descienden de manera controlada.', 'https://i.imgur.com/YltQEiq.gif');
CALL insertar_ejercicio('Flexiones en pica', 'Las flexiones en pica son un ejercicio avanzado que trabaja los hombros, los tríceps y los abdominales. Se realiza en posición de plancha, elevando las caderas hacia el techo y formando una V invertida con el cuerpo, luego se realizan flexiones con los codos hacia atrás.', 'https://i.imgur.com/TNJjwtY.gif');
CALL insertar_ejercicio('Saltos de rodillas al pecho', 'Los saltos de rodillas al pecho son un ejercicio explosivo que trabaja las piernas y el abdomen. Se realiza saltando y llevando las rodillas hacia el pecho en el aire, luego se aterriza suavemente y se repite el movimiento.', 'https://i.imgur.com/VJIcNfL.gif');
CALL insertar_ejercicio('Planck con piernas alternas', 'El planck con piernas alternas es un ejercicio que fortalece los abdominales, los glúteos y los músculos estabilizadores. Se realiza en posición de plancha, luego se levanta una pierna hacia atrás manteniendo el cuerpo recto y se alterna con la otra pierna.', 'https://i.imgur.com/VP6DDuH.gif');
CALL insertar_ejercicio('Desplantes con salto', 'Los desplantes con salto son un ejercicio que trabaja las piernas, los glúteos y el equilibrio. Se realiza dando un paso largo hacia adelante en posición de desplante, luego se salta cambiando de pierna en el aire y se aterriza en un desplante con la otra pierna.', 'https://i.imgur.com/5kFrB6D.gif');
CALL insertar_ejercicio('Fondos en paralelas', 'Los fondos en paralelas son un ejercicio que trabaja principalmente los tríceps y los músculos de los hombros y el pecho. Se realiza apoyando las manos en unas barras paralelas y bajando el cuerpo hasta que los codos formen un ángulo de 90 grados, luego se empuja el cuerpo hacia arriba.', 'https://i.imgur.com/0P5lxRU.gif');
CALL insertar_ejercicio('Plancha con extensión de brazo', 'La plancha con extensión de brazo es un ejercicio que fortalece los abdominales, los brazos y los hombros. Se realiza en posición de plancha con las manos en el suelo, luego se extiende un brazo hacia adelante y se mantiene la posición, luego se alterna con el otro brazo.', 'https://i.imgur.com/KkVeZvl.gif');

CALL insertar_ejercicio('Correr en el lugar', 'Correr en el lugar es una excelente opción de cardio que puedes hacer en cualquier momento y lugar. Simplemente levanta las rodillas y alterna los pies como si estuvieras corriendo sin moverte del sitio.', 'https://i.imgur.com/b0o4J6n.gif');
CALL insertar_ejercicio('Saltar la cuerda', 'Saltar la cuerda es un ejercicio clásico de cardio que puedes hacer en cualquier lugar. Utiliza una cuerda de saltar adecuada para tu altura y salta a un ritmo constante, levantando los pies del suelo y rotando la cuerda con las muñecas.', 'https://i.imgur.com/XqEddvX.gif');
CALL insertar_ejercicio('Patadas de burro', 'Las patadas de burro son un ejercicio de cardio que se centra en los músculos de las piernas y los glúteos. Comienza en posición de gateo a cuatro patas y levanta una pierna hacia atrás, extendiéndola y llevándola lo más alto posible. Alterna las piernas en cada repetición.', 'https://i.imgur.com/8VoA3zz.giff');


select * from ejercicios
select * from gruposmusculares
--piernas y gluteos
CALL insertar_ejercicio_grpmuscular(7, 4);
CALL insertar_ejercicio_grpmuscular(7, 8);
select * from Ejercicios_Grpmuscular;

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

select * from ejercicios;

CALL insertar_rutina_ejercicio(1, 3, 15, NULL);


--/////////////////////////RUTINA CARDIO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(2::SMALLINT, 5::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 7::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 9::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 21::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 27::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 25::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 34::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(2::SMALLINT, 22::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(2::SMALLINT, 36::SMALLINT, 15::SMALLINT, null);

--//////////////////////RUTINA ENTRENAMIENTO FUNCIONAL\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(3::SMALLINT, 4::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 5::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(3::SMALLINT, 6::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 7::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 8::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 9::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 10::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 11::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 21::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 22::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 23::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 24::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 25::SMALLINT, null, '00:00:40');
CALL insertar_rutina_ejercicio(3::SMALLINT, 35::SMALLINT, null, '00:00:40');
CALL insertar_rutina_ejercicio(3::SMALLINT, 36::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 37::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 38::SMALLINT, null, '00:01:00');

--//////////////////////RUTINA TONIFICACION MUSCULAR \\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(3::SMALLINT, 3::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 9::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(3::SMALLINT, 10::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 11::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 13::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 15::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 16::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 17::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 20::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 23::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 25::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 26::SMALLINT, 15::SMALLINT, '00:01:00');
CALL insertar_rutina_ejercicio(3::SMALLINT, 29::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 30::SMALLINT, 10::SMALLINT,null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 37::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(3::SMALLINT, 38::SMALLINT, null, '00:01:00');

--//////////////////////RUTINA RESISTENCIA \\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(5::SMALLINT, 13::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 15::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(5::SMALLINT, 16::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 17::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 20::SMALLINT, NULL,  '00:01:00');
CALL insertar_rutina_ejercicio(5::SMALLINT, 21::SMALLINT, NULL, '00:00:40');
CALL insertar_rutina_ejercicio(5::SMALLINT, 22::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 23::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 24::SMALLINT, NULL, '00:00:40');
CALL insertar_rutina_ejercicio(5::SMALLINT, 29::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 33::SMALLINT, 12::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(5::SMALLINT, 34::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(5::SMALLINT, 35::SMALLINT, null, '00:01:00');


--//////////////////////RUTINA CUERPO COMPLETO \\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(6::SMALLINT, 3::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 5::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(6::SMALLINT, 7::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 15::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 10::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 9::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 4::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 12::SMALLINT, null, '00:01:00');
CALL insertar_rutina_ejercicio(6::SMALLINT, 16::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(6::SMALLINT, 17::SMALLINT, 20::SMALLINT, null);

--//////////////////////RUTINA PIERNAS\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(7::SMALLINT, 7::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 15::SMALLINT, 20::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(7::SMALLINT, 17::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 8::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 23::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 36::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 22::SMALLINT, 120::SMALLINT, null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 32::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(7::SMALLINT, 25::SMALLINT, 20::SMALLINT, NULL);

select * from rutinas
--//////////////////////RUTINA BRAZOS\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(8::SMALLINT, 3::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 9::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(8::SMALLINT, 5::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 4::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 10::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 11::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 16::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 24::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 30::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(8::SMALLINT, 37::SMALLINT, 15::SMALLINT,null);

--//////////////////////RUTINA ESPALDA\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(9::SMALLINT, 5::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 4::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(9::SMALLINT, 10::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 11::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 6::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 15::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 23::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 17::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(9::SMALLINT, 16::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(9::SMALLINT, 31::SMALLINT, NULL, '00:02:00');
CALL insertar_rutina_ejercicio(9::SMALLINT, 32::SMALLINT, 15::SMALLINT, NULL);


--//////////////////////RUTINA PECHO\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(10::SMALLINT, 9::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(10::SMALLINT, 4::SMALLINT, 15::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(10::SMALLINT, 3::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(10::SMALLINT, 30::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(10::SMALLINT, 37::SMALLINT, 15::SMALLINT, null);
CALL insertar_rutina_ejercicio(10::SMALLINT, 10::SMALLINT, 15::SMALLINT,null);
CALL insertar_rutina_ejercicio(10::SMALLINT, 11::SMALLINT, 15::SMALLINT, null);

--//////////////////////RUTINA ABDOMINALES\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(11::SMALLINT, 12::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 13::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 20::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 21::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 26::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 28::SMALLINT, NULL, '00:01:00');
CALL insertar_rutina_ejercicio(11::SMALLINT, 31::SMALLINT, NULL, '00:01:00');


--//////////////////////RUTINA GLUTEOS\\\\\\\\\\\\\\\\\\\\\\\\\\\
CALL insertar_rutina_ejercicio(12::SMALLINT, 8::SMALLINT, 20::SMALLINT,NULL);
CALL insertar_rutina_ejercicio(12::SMALLINT, 15::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 14::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 17::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 29::SMALLINT, 20::SMALLINT,null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 23::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 35::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 41::SMALLINT, 20::SMALLINT, null);
CALL insertar_rutina_ejercicio(12::SMALLINT, 25::SMALLINT, 20::SMALLINT, null);

-- Ejercicio: Press de banca
CALL insertar_ejercicio_grpmuscular(2, 2);
CALL insertar_ejercicio_grpmuscular(2, 12);
-- Ejercicio: Flexiones de pecho
CALL insertar_ejercicio_grpmuscular(3, 2);
CALL insertar_ejercicio_grpmuscular(3, 5);
CALL insertar_ejercicio_grpmuscular(3, 12);
CALL insertar_ejercicio_grpmuscular(3, 6);
-- Ejercicio: Dominadas
CALL insertar_ejercicio_grpmuscular(4, 3);
CALL insertar_ejercicio_grpmuscular(4, 5);
CALL insertar_ejercicio_grpmuscular(4, 14);
-- Ejejcicio: Remo con mancuerna
CALL insertar_ejercicio_grpmuscular(5, 3);
CALL insertar_ejercicio_grpmuscular(5, 5);
CALL insertar_ejercicio_grpmuscular(5, 14);
-- Ejercicio: Sentadillas
CALL insertar_ejercicio_grpmuscular(6, 4);
CALL insertar_ejercicio_grpmuscular(6, 8);
-- Ejercicio: Zancadas
CALL insertar_ejercicio_grpmuscular(7, 4);
CALL insertar_ejercicio_grpmuscular(7, 8);
-- Ejercicio: Curl de bíceps con mancuernas
CALL insertar_ejercicio_grpmuscular(8, 7);
-- Ejercicio: Press militar
CALL insertar_ejercicio_grpmuscular(9, 5);
CALL insertar_ejercicio_grpmuscular(9, 6);
CALL insertar_ejercicio_grpmuscular(9, 12);
-- Ejercicio: Elevaciones laterales
CALL insertar_ejercicio_grpmuscular(10, 6);
-- Ejercicio: Plancha abdominal
CALL insertar_ejercicio_grpmuscular(11, 7);
-- Ejercicio: Crunch de abdominales
CALL insertar_ejercicio_grpmuscular(12, 7);
-- Ejercicio: Sentadillas sumo
CALL insertar_ejercicio_grpmuscular(13, 4);
CALL insertar_ejercicio_grpmuscular(13, 8);
-- Ejercicio: Puentes de glúteos
CALL insertar_ejercicio_grpmuscular(14, 8);
-- Ejercicio: Encogimientos de hombros
CALL insertar_ejercicio_grpmuscular(15, 9);
CALL insertar_ejercicio_grpmuscular(15, 6);
-- Ejercicio: Elevaciones de talones
CALL insertar_ejercicio_grpmuscular(16, 10);
-- Ejercicio: Saltos de tijera
CALL insertar_ejercicio_grpmuscular(17, 13);
-- Ejercicio: Press Arnold
CALL insertar_ejercicio_grpmuscular(18, 6);
CALL insertar_ejercicio_grpmuscular(18, 12);
CALL insertar_ejercicio_grpmuscular(18, 5);
-- Ejercicio: Burpees
CALL insertar_ejercicio_grpmuscular(19, 13);
-- Ejercicio: Plancha lateral
CALL insertar_ejercicio_grpmuscular(20, 7);
CALL insertar_ejercicio_grpmuscular(20, 15);
-- Ejercicio: Mountain climbers
CALL insertar_ejercicio_grpmuscular(21, 7);
CALL insertar_ejercicio_grpmuscular(21, 13);
-- Ejercicio: Saltos al cajón
CALL insertar_ejercicio_grpmuscular(22, 4);
CALL insertar_ejercicio_grpmuscular(22, 13);
-- Ejercicio: Desplantes laterales
CALL insertar_ejercicio_grpmuscular(23, 8);
CALL insertar_ejercicio_grpmuscular(23, 4);
-- Ejercicio: Flexiones diamante
CALL insertar_ejercicio_grpmuscular(24, 2);
CALL insertar_ejercicio_grpmuscular(24, 12);
CALL insertar_ejercicio_grpmuscular(24, 5);
-- Ejercicio: Sentadilla con salto
CALL insertar_ejercicio_grpmuscular(25, 4);
CALL insertar_ejercicio_grpmuscular(25, 8);
CALL insertar_ejercicio_grpmuscular(25, 13);
-- Ejercicio: Plancha con elevación de pierna
CALL insertar_ejercicio_grpmuscular(26, 8);
CALL insertar_ejercicio_grpmuscular(26, 7);
-- Ejercicio: Skipping
CALL insertar_ejercicio_grpmuscular(27, 13);
-- Ejercicio: Plancha con rotación
CALL insertar_ejercicio_grpmuscular(28, 7);
CALL insertar_ejercicio_grpmuscular(28, 15);
-- Ejercicio: Sentadillas búlgaras
CALL insertar_ejercicio_grpmuscular(29, 4);
CALL insertar_ejercicio_grpmuscular(29, 8);
-- Ejercicio: Flexiones declinadas
CALL insertar_ejercicio_grpmuscular(30, 5);
CALL insertar_ejercicio_grpmuscular(30, 2);
CALL insertar_ejercicio_grpmuscular(30, 12);
-- Ejercicio: Caminata del oso
CALL insertar_ejercicio_grpmuscular(31, 7);
CALL insertar_ejercicio_grpmuscular(31, 13);
-- Ejercicio: Elevaciones de piernas colgado
CALL insertar_ejercicio_grpmuscular(32, 7);
-- Ejercicio: Flexiones en pica
CALL insertar_ejercicio_grpmuscular(33, 2);
CALL insertar_ejercicio_grpmuscular(33, 5);
CALL insertar_ejercicio_grpmuscular(33, 12);
-- Ejercicio: Saltos de rodillas al pecho
CALL insertar_ejercicio_grpmuscular(34, 4);
CALL insertar_ejercicio_grpmuscular(34, 13);
-- Ejercicio: Planck con piernas alternas
CALL insertar_ejercicio_grpmuscular(35, 7);
-- Ejercicio: Desplantes con salto
CALL insertar_ejercicio_grpmuscular(36, 4);
CALL insertar_ejercicio_grpmuscular(36, 8);
CALL insertar_ejercicio_grpmuscular(36, 10);
-- Ejercicio: Fondos en paralelas
CALL insertar_ejercicio_grpmuscular(37, 2);
CALL insertar_ejercicio_grpmuscular(37, 6);
CALL insertar_ejercicio_grpmuscular(37, 5);
CALL insertar_ejercicio_grpmuscular(37, 12);
-- Ejercicio: Plancha con extensión de brazo
CALL insertar_ejercicio_grpmuscular(38, 7);
CALL insertar_ejercicio_grpmuscular(38, 12);
-- Ejercicio: Correr en el lugar
CALL insertar_ejercicio_grpmuscular(39, 13);
-- Ejercicio: Saltar la cuerda
CALL insertar_ejercicio_grpmuscular(40, 13);
-- Ejercicio: Patadas de burro
CALL insertar_ejercicio_grpmuscular(41, 7);
CALL insertar_ejercicio_grpmuscular(41, 8);

-- Rutinas de cardio
--14, 15,16,17,18
CALL insertar_rutina('Cardio para Principiantes', '00:30:00', '00:02:00', 'cardio');
CALL insertar_rutina('Cardio para Intermedios', '00:40:00', '00:01:00', 'cardio');
CALL insertar_rutina('Rutina para Sudar', '00:35:00', '00:02:30', 'cardio');
CALL insertar_rutina('Cardio para bajar de peso', '00:45:00', '00:01:30', 'cardio');
CALL insertar_rutina('Cardio para Avanzados', '00:50:00', '00:02:00', 'cardio');

-- Rutinas de entrenamiento funcional
--19,20,21,22,23
CALL insertar_rutina('Entrenamiento funcional Intermedio', '00:40:00', '00:00:40', 'entrenamiento funcional');
CALL insertar_rutina('Entrenamiento funcional Intermedio 2', '00:45:00', '00:00:30', 'entrenamiento funcional');
CALL insertar_rutina('Let´s move ', '00:50:00', '00:01:00', 'entrenamiento funcional');
CALL insertar_rutina('Entrenamiento funcional Principiante', '00:35:00', '00:01:30', 'entrenamiento funcional');
CALL insertar_rutina('Entrenamiento funcional Avanzado ', '00:55:00', '00:01:00', 'entrenamiento funcional');

-- Rutinas de tonificación muscular
--24,25,26,27,28
CALL insertar_rutina('Mi primera tonificación', '00:40:00', '00:01:00', 'tonificación muscular');
CALL insertar_rutina('Tonificación muscular Intermedio', '00:45:00', '00:01:30', 'tonificación muscular');
CALL insertar_rutina('Tonificación muscular Avanzado', '00:50:00', '00:01:00', 'tonificación muscular');
CALL insertar_rutina('Tonificación muscular Principiante', '00:35:00', '00:00:45', 'tonificación muscular');
CALL insertar_rutina('Tonificación muscular Intensivo', '01:00:00', '00:02:00', 'tonificación muscular');

-- Rutinas de resistencia
--29,30,31,32,33
CALL insertar_rutina('Resistencia Intermedio', '00:40:00', '00:00:40', 'resistencia');
CALL insertar_rutina('Resistencia Avanzado', '00:45:00', '00:01:00', 'resistencia');
CALL insertar_rutina('Resistencia next level', '00:50:00', '00:01:30', 'resistencia');
CALL insertar_rutina('Resistencia Principiante', '00:35:00', '00:02:00', 'resistencia');
CALL insertar_rutina('Resistencia top level', '01:00:00', '00:01:00', 'resistencia');

-- Rutinas de fuerza
--34,35,36,37,38
CALL insertar_rutina('Fuerza Bruta', '00:40:00', '00:01:30', 'fuerza');
CALL insertar_rutina('Fuerza Bruta 2', '00:45:00', '00:01:00', 'fuerza');
CALL insertar_rutina('Rutina de fuerza Intermedio', '00:50:00', '00:02:00', 'fuerza');
CALL insertar_rutina('Rutina de fuerza Principiante', '00:35:00', '00:00:45', 'fuerza');
CALL insertar_rutina('Rutina de fuerza Avanzado', '00:55:00', '00:01:30', 'fuerza');
-- Rutinas de cuerpo completo
CALL insertar_rutina('Full Body', '01:00:00', '00:01:00', 'cuerpo completo');
CALL insertar_rutina('Let´s trainig all', '01:15:00', '00:01:30', 'cuerpo completo');

-- Rutinas de piernas
CALL insertar_rutina('No más piernas de pollo', '00:45:00', '00:01:00', 'piernas');
CALL insertar_rutina('Piernas como una roca', '01:00:00', '00:01:30', 'piernas');

-- Rutinas de brazos
CALL insertar_rutina('Big arms', '00:30:00', '00:00:45', 'brazos');
CALL insertar_rutina('Big arms 2', '00:45:00', '00:01:00', 'brazos');

-- Rutinas de espalda
CALL insertar_rutina('Mi primer pull up', '00:45:00', '00:01:00', 'espalda');
CALL insertar_rutina('Espalda enorme', '01:00:00', '00:01:30', 'espalda');

-- Rutinas de pecho
CALL insertar_rutina('Pectoral rápido', '00:30:00', '00:00:45', 'pecho');
CALL insertar_rutina('Pecho más grande', '00:45:00', '00:01:00', 'pecho');

-- Rutinas de abdominales
CALL insertar_rutina('Abs Diarios', '00:15:00', '00:00:30', 'abdominales');
CALL insertar_rutina('Perder panza', '00:45:00', '00:00:45', 'abdominales');

-- Rutinas de glúteos
CALL insertar_rutina('Pomp up', '00:30:00', '00:00:45', 'glúteos');
CALL insertar_rutina('Crecimiento de glúteos', '00:45:00', '00:01:00', 'glúteos');

-- Rutinas de bíceps
CALL insertar_rutina('Rutina de bíceps ', '00:30:00', '00:00:45', 'bíceps');
CALL insertar_rutina('Focus the biceps', '00:45:00', '00:01:00', 'bíceps');

select * from rutinas
select * from ejercicios_grpmuscular


SELECT R.nombreRutina, 
       STRING_AGG('- ' || E.nombreEjercicio || ' (Repeticiones: ' || COALESCE(RE.repeticiones::text, 'N/A') || ', Tiempo: ' || COALESCE(RE.tiempo::text, 'N/A') || ')', E'\n') AS ejercicios_asociados
FROM Rutinas R
JOIN Rutina_Ejercicios RE ON R.id = RE.idRutina
JOIN Ejercicios E ON RE.idEjercicio = E.id
GROUP BY R.nombreRutina;

SELECT * FROM Ejercicios 

select * from ejercicios where idgrupomuscular = 7;
SELECT * FROM gruposmusculares ;

ALTER TABLE rutinas
alter COLUMN tipo type varchar(30);

SELECT DISTINCT GM."nomGrupoMuscular", E.nombreEjercicio, E.descripcion, E.gif
FROM Ejercicios E
JOIN Ejercicios_GrpMuscular EGM ON E.id = EGM.idEjercicio
JOIN GruposMusculares GM ON EGM.idGrupoMuscular = GM.id;

SELECT GM."nomGrupoMuscular" AS grupoMuscular, 
       STRING_AGG(E.id || '- ' || E.nombreEjercicio, ', ') AS ejerciciosAsociados
FROM Ejercicios E
JOIN Ejercicios_GrpMuscular EGM ON E.id = EGM.idEjercicio
JOIN GruposMusculares GM ON EGM.idGrupoMuscular = GM.id
GROUP BY GM."nomGrupoMuscular";

UPDATE Rutinas
SET nivel = 'principiante'
WHERE id IN (2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 22, 24, 27, 32, 37, 41, 45, 47, 50, 51);

UPDATE Rutinas
SET nivel = 'intermedio'
WHERE id IN (15,16,19,20,21,25,29,34,36,39,40,42,43,48,49,52,53) ;




UPDATE Rutinas
SET nivel = 'avanzado'
WHERE id IN (18,23,26,28,30, 31,33,35,38,44,46,54) ;



SELECT E.nombreEjercicio AS ejercicio, 
       E.descripcion,
       E.gif,
       STRING_AGG(GM."nomGrupoMuscular", ', ') AS gruposMuscularesAsociados
FROM Ejercicios E
JOIN Ejercicios_GrpMuscular EGM ON E.id = EGM.idEjercicio
JOIN GruposMusculares GM ON EGM.idGrupoMuscular = GM.id
GROUP BY E.nombreEjercicio, E.descripcion, E.gif;



select * from progreso
SELECT U.nombre , Pr.peso, Pr.altura, Pr.imc
FROM Usuarios U
JOIN Progreso Pr ON U.id = Pr.iduser;

CALL insertar_progreso(2, 46, 1.56, 18.90);
select * from usuarios

