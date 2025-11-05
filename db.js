//Importamos los modulos necesarios de firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
//Modulos de la base de datos: Cada uno de estos modulos nos permite realizar diferentes operaciones en la base de datos
//Por ejemplo, "getDatabase" nos permite obtener una instancia de la base de datos, 
// "ref" nos permite crear referencias a ubicaciones específicas en la base de datos,
//"push" nos permite agregar nuevos datos a una lista, 
// "onValue" nos permite escuchar cambios en los datos en tiempo real, y 
// "set" nos permite escribir datos en una ubicación específica.
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";


//Importamos esta configuracion desde firebase
//En la configuración del proyecto, elegimos la opción CDN 
// y copiamos el fragmento de código que nos proporciona Firebase, sin las etiquetas <script>.
// Your web app's Firebase configuration
const firebaseConfig = {
    //Esta información corresponde a mi cuenta de firebase
    //Cada proyecto tiene su propia configuración única
    //Reemplazá los valores por los de tu propio proyecto de Firebase si estás siguiendo este ejemplo
    
        apiKey: "AIzaSyBRIj6XV-ODhvEz5RUo4bLRWmWOzgP2Ce8",
        authDomain: "basededatos-16bad.firebaseapp.com",
        databaseURL: "https://basededatos-16bad-default-rtdb.firebaseio.com/", // 👈 ESTA LÍNEA ES CLAVE
        projectId: "basededatos-16bad",
        storageBucket: "basededatos-16bad.firebasestorage.app",
        messagingSenderId: "568461938141",
        appId: "1:568461938141:web:141767f08d69d06a183a34"
      };

// Inicializamos la app de firebase
const app = initializeApp(firebaseConfig);
//Inicializamos la base de datos
const db = getDatabase(app);

//Seleccionamos los elementos del DOM donde mostraremos los datos
//y donde agregaremos nuevos datos
//Primero los  iunput para agregar nuevos estudiantes
let inputNombre = document.querySelector("#nombre");
let inputApellido = document.querySelector("#pais");
let inputDni = document.querySelector("#fundacion");
//y el boton
let btnAgregar = document.querySelector("#agregar");


btnAgregar.onclick = function () {
    //Creamos una referencia a la ubicación "estudiantes" en la base de datos
    //Y con el dni como clave unica
    //Esto asegura que cada estudiante se almacene bajo su dni
    let electrodomesticosRef = ref(db, 'electrodomesticos/' + inputnombre.value);

    //Usamos la función "set" para escribir los datos del nuevo estudiante en la base de datos
    //Le indicamos donde almacenar los datos y qué datos almacenar


    set(electrodomesticosRef, {
        //Tomamos cada dato desde los inputs del formulario
        nombre: inputNombre.value,
        fndacion: inputFundacion.value,
        pais: inputPais.value,
    })


        //Agregamos algunas alertas para indicar que los datos se han agregado correctamente
        //o si hubo un error al agregar los datos
        //Usamos la función "then" para manejar el caso exitoso
        .then(() => {
            alert("Electrodomestico agregado correctamente");
        })
        //Usamos la función "catch" para manejar errores
        .catch((error) => {
            alert("Error al agregar electrodomestico: " + error.message);
        }); 

}