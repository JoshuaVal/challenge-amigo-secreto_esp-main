// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ArrayNombres = [];
let nombreIngresado;

//Obtener nombre del input
function obtenerNombre(){
    //Retorna el nombre del input
    return document.getElementById('amigo').value;
}

//Función de agregar amigo
function agregarAmigo(){
    //La variable obtiene el nombre que retorna la función
    const obtenerName = obtenerNombre();
    //Esta variable recibe el nombre obtendio anteriormente y lo convierte a mayuscula
    //Esto es para facilitar la comprobación de nombres que ya existan en la lista 
    nombreIngresado = obtenerName.toUpperCase();
    //Llamamos a la funcion que realiza la validación y segun esta nos da un resultado
    validarNombre(ArrayNombres, nombreIngresado);
}

//Función agregar elemento al array
//Recibe el nombre y lo agrega al array
function agregarNombreAlArray(nombre){
    //Con push() agregamos un nombre al array
    ArrayNombres.push(nombre);
}

//Función para validar si input esta vacio o se repite
function validarNombre(array, valor){
    //Comprobamos si el array esta vacio 
    if(valor === ''){
        //Si esta vacio se envia un alert
        alert('Ingrese un nombre!');
    //Validamos si el nombre ingresado no se repite 
    }else if(array.includes(valor)){
        //Si el nombre existe enviamos un alert
        alert('El nombre ya existe en la lista!');
        limpiarInput();
    }else{
        //Si no esta vacio y tampoco se repite se ejecutan las siguientes funciones
        limpiarInput();
        agregarNombreAlArray(valor);
        crearElemento(valor)
    }
}

//Función para limpiar imput despues de ingresar un valor
function limpiarInput(){
    document.getElementById('amigo').value = '';
}

//Función que crea elemento li dentro de ul
function crearElemento(valor) {
    //Obtenemos la "ul"
    const miLista = document.getElementById('resultado');
    //Creamos el elemento "li"
    const nuevoElemento = document.createElement('li');
    //Agregamos texto a "li", por aqui pasaremos el nombre ingresado
    const textoElemento = document.createTextNode(valor);
    //Añadimos a "li" el nombre ingresado
    nuevoElemento.appendChild(textoElemento);
    //Añadimos "li" a "ul"
    miLista.appendChild(nuevoElemento);
}

//Función para boton de sortear amigo
function sortearAmigo(){
    comprobarArray(ArrayNombres);
}

//Función para sortear numeros
function sortear(array){
    //la función recibe como parametro un numero sorteado
    //este numero se multiplica por la longitud del array y lo redondeamos
    //Con esto no se sorteara un numero que no exista
    const sortearNumber = Math.floor((Math.random() * array.length))
    //Retornamos el numero sorteado
    return sortearNumber;
}

//Función que retorna nombre del array
function mostrarNombre(array, numero){
    //obtengo el numero sorteado y se lo asigno al array 
    const nombreSorteado = array[numero]
    //retorno el alert que muestra el nombre sorteado
    return alert(`El nombre sorteado es ${nombreSorteado}` );
}

//Función para validar longitud de Array
function comprobarArray(array){
    //Comprobamos que el array no este vacio
    if (array.length === 0){
        //Si esta vacio enviamos un alert
        alert('La lista esta vacia!');
    }else{
        //si no esta vacio ejecutamos las funciones
        mostrarNombre(ArrayNombres, sortear(ArrayNombres));
        reiniciarJuego();
    }
}

//Función para reiniciar el juego
function reiniciarJuego() {
    //Reiniciamos el array (Lo dejamos vacio)
    ArrayNombres = [];
    //Limpiamos el input
    limpiarInput();
    //Eliminamos el "li" de "ul"
    document.getElementById("resultado").innerHTML = "";
}