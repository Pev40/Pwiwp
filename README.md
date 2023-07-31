# PWIWP Red Social

## Descripción general
Este proyecto tiene como objetivo proporcionar un sistema de autenticación de usuarios mediante la implementación de una función de inicio de sesión y creacion de usuarios

## Trello
 [Enlace Trello](https://trello.com/invite/b/niJLByP0/ATTI9e7870e3d9960cbf216433993eeebb357FFF3A43/pwiwp-tablero)

## Practica 09: Estilos de Programación
### Estilo 1 - Letterbox

#### Descripción
- El problema más grande se descompone en 'cosas' que tienen sentido para el dominio del problema.
- Cada 'cosa' es una cápsula de datos que expone un solo procedimiento, a saber, la capacidad de recibir y enviar mensajes que se le envían.
- El envío de mensajes puede resultar en el envío del mensaje a otra cápsula.

### Estilo 2 - Tantrum

#### Descripción
- Cada procedimiento y función verifica la cordura de sus argumentos y se niega a continuar cuando los argumentos no son razonables.
- Todos los bloques de código verifican todos los posibles errores, posiblemente imprimen mensajes específicos del contexto cuando ocurren errores y pasan los errores a la cadena de llamadas de función

### Estilo 3 - Aspects

#### Descripción
- El problema se descompone utilizando alguna forma de abstracción (procedimientos, funciones, objetos, etc.)
- Los aspectos del problema se agregan al programa principal sin editar el código fuente de las abstracciones. Estas funciones secundarias se aferran a las abstracciones principales nombrándolas, como en "Soy un aspecto de foo (¡aunque puede que foo no lo sepa!)".

## PRÁCTICA 10: CODIFICACIÓN LEGIBLE (CLEAN CODE)

### Clean Code 1 - Comentarios

#### Descripción
- Intenta siempre explicarte en código.
- No seas redundante.
- No agregue ruido obvio.
- No use comentarios de llaves de cierre.
- No comente el código. Solo elimina.
- Utilizar como explicación de la intención. 
- Utilizar como aclaración de código.
- Utilizar como advertencia de las consecuencias.

### Clean Code 2 - Reglas de nombres

- Elija nombres descriptivos e inequívocos.
- Hacer una distinción significativa.
- Usa nombres pronunciables.
- Utilice nombres buscables.
- Reemplace los números mágicos con constantes con nombre.
- Evite las codificaciones. No agregue prefijos ni escriba información.

  
### Clean Code 3 - Consejos de comprensibilidad

#### Despcripción 
- Se consistente. Si haces algo de cierta manera, haz todas las cosas similares de la misma manera.
- Usa variables explicativas.
- Encapsular las condiciones de contorno. Las condiciones de contorno son difíciles de seguir. Ponga el procesamiento para ellos en un solo lugar.
- Prefiere los objetos de valor dedicados al tipo primitivo.
- Evita la dependencia lógica.
- No escriba métodos que funcionen correctamente dependiendo de otra cosa en la misma clase.
- Evita los condicionales negativos.


### Clean Code 4 - Reglas de funciones
#### Descripción
- Pequeña.
- Haz una cosa.
- Utilice nombres descriptivos.
- Prefiere menos argumentos.
- No tiene efectos secundarios.
- No use argumentos de bandera. Divida el método en varios métodos independientes que se pueden llamar desde el cliente sin la bandera.


### Clean Code 5 - Objetos y estructuras de datos (Por Implementar)
#### Descripción
- Ocultar estructura interna.
- Preferir estructuras de datos.
- Evita estructuras híbridas (mitad objeto y mitad datos).
- Debería ser pequeño.
- Haz una cosa.
- Pequeño número de variables de instancia.
- La clase base no debe saber nada acerca de sus derivados.
- Es mejor tener muchas funciones que pasar algo de código a una función para seleccionar un comportamiento.
- Prefiere métodos no estáticos a métodos estáticos.


### Clean Code - 7 Capitalize SQL Special Words
#### Descripción
- La interacción con la base de datos es una parte importante de la mayoría de las aplicaciones web. Si está escribiendo consultas SQL sin procesar, es una buena idea mantenerlas legibles también.
- Aunque las palabras especiales de SQL y los nombres de funciones no distinguen entre mayúsculas y minúsculas, es una práctica común usar mayúsculas para distinguirlos de los nombres de tablas y columnas.

--- javasript
   async get() {
      return new Promise(async (resolve, reject) => {
        const connection = connectionDb();
        const data = await connection
          .query(
            "SELECT * FROM iniciosesion"
          )
          .catch((err) => {
            console.error("MODEL InicioSesion: Can not get", err);
            return null;
          });
        connection.end();
        if (data && data.rows && data.rows.length > 0)
          return resolve(data.rows);
        return reject(null);
      });
    },
---

## Características Actuales

### Modelo de Inicio de Sesión
Se ha agregado el modelo de inicio de sesión al proyecto para manejar los datos de autenticación de usuarios. Incluye los siguientes atributos:
- `email`: Una cadena que representa el correo electrónico del usuario.
- `password`: Una cadena que representa la contraseña del usuario (en el futuro necesitaremos cifrarla).
- `imei`: Una cadena que representa el número de Identidad Internacional de Equipo Móvil (IMEI) del dispositivo del usuario.
- `user_id`: Un identificador que representa el ID único del usuario.

### Servicio de Inicio de Sesión
Se ha creado el servicio de inicio de sesión para manejar la autenticación del usuario y funcionalidades relacionadas. Incluye las siguientes funciones:
- `createUser(email, password, imei)`: Esta función permite la creación de un nuevo usuario en el sistema. Toma como entrada el `email`, `password` e `imei` y los almacena de forma segura en la base de datos.

### Controlador de Usuarios
Se ha añadido el controlador de usuarios para gestionar las interacciones relacionadas con los usuarios en el sistema. Incluye la siguiente función:
- `userCreate(req, res)`: Esta función es responsable de manejar las solicitudes HTTP relacionadas con la creación de usuarios. Toma los objetos de solicitud (`req`) y respuesta (`res`) como entradas y utiliza la función `createUser` del servicio de inicio de sesión para crear un nuevo usuario.

