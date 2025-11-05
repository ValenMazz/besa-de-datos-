
// Importamos los módulos necesarios de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
// Módulos de la base de datos
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRIj6XV-ODhvEz5RUo4bLRWmWOzgP2Ce8",
  authDomain: "basededatos-16bad.firebaseapp.com",
  databaseURL: "https://basededatos-16bad-default-rtdb.firebaseio.com/", // 👈 ESTA LÍNEA ES CLAVE
  projectId: "basededatos-16bad",
  storageBucket: "basededatos-16bad.firebasestorage.app",
  messagingSenderId: "568461938141",
  appId: "1:568461938141:web:141767f08d69d06a183a34"
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);
// Inicializamos la base de datos
const db = getDatabase(app);

// Referenciamos el elemento del DOM donde mostraremos la lista de estudiantes
let tabla = document.querySelector(".tabla-electrodomesticos");

// Creamos una referencia a la rama "estudiantes"
const refElectrodomesticos = ref(db, "electrodomesticos");

// Escuchamos los cambios en tiempo real en la rama "estudiantes"
onValue(refElectrodomesticos, (snapshot) => {
  const electrodomesticos = snapshot.val();
  tabla.innerHTML = ""; // Limpiamos la tabla

  if (!electrodomesticos) {
    tabla.innerHTML = `<tr><td colspan="4">No hay electrodomesticos cargados.</td></tr>`;
    return;
  }

  // Recorremos los datos obtenidos
  for (let dni in electrodomesticos) {
    const est = electrodomesticos[dni];
    tabla.innerHTML += `
      <tr>
        <td>${est.fundacion}</td>
        <td>${est.nombre}</td>
        <td>${est.pais}</td>
      </tr>
    `;
  }
});
