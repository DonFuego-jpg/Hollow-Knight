const barra = document.getElementById('barra');
const porcentajeTexto = document.getElementById('porcentaje'); 
const botonEntrar = document.getElementById('botonEntrar');
const particulas = document.getElementById('particulas')

let porcentaje = 0;

const cargando = setInterval(() => {

    porcentaje++;

    barra.style.width = porcentaje + "%";
    porcentajeTexto.textContent = `Cargando... ${porcentaje}%`;

    if (porcentaje >= 100) {

        clearInterval(cargando);

        porcentajeTexto.textContent = "¡Carga completada!";

        botonEntrar.style.display = "block";
    }

}, 35);

botonEntrar.addEventListener("click", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.7s ease";

    setTimeout(() => {

        window.location.href = "../home/Inicio.html";

    }, 700);

});

function crearParticulas() {

    for (let i = 0; i < 35; i++) {

        const particula = document.createElement("span");

        particula.classList.add("particulas");

        particula.style.left = Math.random() * 100 + "%";
        particula.style.animationDuration =
            Math.random() * 6 + 5 + "s";

        particula.style.animationDelay =
            Math.random() * 5 + "s";

        const tamaño = Math.random() * 5 + 2;

        particula.style.width = tamaño + "px";
        particula.style.height = tamaño + "px";

        contenedorParticulas.appendChild(particula);
    }
}

crearParticulas();