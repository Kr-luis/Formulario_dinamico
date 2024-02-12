let contenedor = document.querySelector('#contenedor');
let subtitulo = document.createElement("h3");
subtitulo.innerText = "Usuario";
let imagen = document.createElement("img");
imagen.src = "assets/imagenes/perfil.jpeg";
imagen.width = "300";
imagen.alt = "usuarios";
//contenedor.appendChild(subtitulo)
//contenedor.appendChild(imagen)
contenedor.append(subtitulo, imagen)

const usuario = {
    nombre: "Alan",
    apellido: "Turing",
    user: "",
    correo: "stevewinner@outlook.com",
    descripcion:
        "Fanático de la tecnología y profesor de las artes de programación con javascript",
    imagen:
        "assets/imagenes/perfil.jpeg",
};

//Para quepodamos reutilizar nos creamos esta fn
const crearTarjeta = () => {
    //document.querySelector("#contenedor_tarjeta").innerHTML = "";
    //Aquí se genera la info del card
    let columnaTarjeta = document.createElement("div");
    columnaTarjeta.className = "col";

    let tarjetaUsuario =
        `<div class="card" style="width: 18rem">
    <img
    src="${usuario.imagen}"
    class="card-img-top pt-2"
    alt="${usuario.nombre}" />
  <div class="card-body">
    <h5 class="card-title">${usuario.nombre} ${usuario.apellido}</h5>
    <p class="card-text">
      ${usuario.descripcion}
    </p>
    <p class="text-muted">
    ${usuario.correo}
    </p>
    <button class="btn btn-primary" onclick="eventoClick(event)">Ver perfil</button>
  </div>
  </div>`;
    columnaTarjeta.innerHTML = tarjetaUsuario;
    document.querySelector("#contenedor_tarjeta").append(columnaTarjeta)
};
const modificarUsuario = (event) => {
    console.log(event);
    event.preventDefault();

    usuario.nombre = document.querySelector("#nombre").value;
    usuario.apellido = document.querySelector("#apellido").value;
    usuario.usuario = document.querySelector("#usuario").value;
    usuario.correo = document.querySelector("#email").value;

    crearTarjeta();
    //limpiarFormulario();
};
const limpiarFormulario = () => {
    document.getElementById("formulario").reset();
};

document
    .getElementById("formulario")
    .addEventListener("submit", modificarUsuario);

crearTarjeta();