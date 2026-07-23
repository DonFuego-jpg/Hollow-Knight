/*/Evento dinamico de contenido uwu/*/
const datosGuia = {
    personajes: {
        titulo: "Personajes",
        descripcion: "En esta sección encontrarás información sobre los personajes del juego, incluyendo sus habilidades, historia y cómo interactúan con el mundo de Hollow Knight.",
        imagen: "../../image/personajes.jpg",
        enlace: "../guiaHK/personajes.html"
    },
    enemigos: {
        titulo: "Enemigos",
        descripcion: "Descubre los diferentes enemigos que encontrarás en el juego, sus patrones de ataque, la historia que esconden detrás y cómo derrotarlos.",
        imagen: "../../image/enemigos2.gif",
        enlace: "../guiaHK/enemigos.html"
    },
    habilidades: {
        titulo: "Habilidades",
        descripcion: "Aprende sobre las habilidades que puedes adquirir a lo largo del juego, cómo obtenerlas y cómo utilizarlas para superar diferentes obstaculos, de igual manera maniobras especiales.",
        imagen: "../../image/Bailecito.gif",
        enlace: "../guiaHK/habilidades.html"
    },
    GuiaDelJuego: {
        titulo: "Guía completa del juego",
        descripcion: "En esta sección encontrarás una guía completa del juego, donde podrás encontrar un mapa de todos los puntos claves del juego, asimismo como pasarlo sin complicaciones en base a como los mejores jugadores de Hollow Knight lo hicieron.",
        imagen: "../../image/Banner2.jpg",
        enlace: "../guiaHK/Guia.html"
    }
};

const frasesPorTema = {
    "original": "Bienvenidos viajeros",
    "tema-grimm": "La Carabana de Grimm",
    "tema-abismo": "El Vacío te llama...",
    "tema-infeccion": "Es un olor algo familiar... ?"
};

/*/Cambio de musica muajajaja/*/
const musicaPorTema = {
    "original": "../../audio/Dirtmouth1.mp3",
    "tema-grimm": "../../audio/Grimm-Acordion.mp3",
    "tema-infeccion": "../../audio/Infeccion.mp3",
    "tema-palacio" : "../../audio/WhitePalace.mp3"
}





/*/Evento Carrusel de imagenes :3/*/

const imgGuia = document.getElementById('guia-img');
const tituloGuia = document.getElementById('guia-titulo');
const descGuia = document.getElementById('guia-desc');
const linkGuia = document.getElementById('guia-link');
const botonesRadio = document.querySelectorAll('input[name="tema-seleccionado"]');

const TIEMPO_CARRUSEL = 6500;
let intervaloCarrusel;

botonesRadio.forEach(radio => {
    radio.addEventListener('change', (evento) => {
        const temaSeleccionado = evento.target.value; 
        const datos = datosGuia[temaSeleccionado];
        
        imgGuia.classList.add('oculto-animacion');
        tituloGuia.classList.add('oculto-animacion');
        descGuia.classList.add('oculto-animacion');
        
        setTimeout(() => {
            imgGuia.src = datos.imagen;
            tituloGuia.textContent = datos.titulo;
            descGuia.textContent = datos.descripcion;
            linkGuia.href = datos.enlace;
            
            imgGuia.classList.remove('oculto-animacion');
            tituloGuia.classList.remove('oculto-animacion');
            descGuia.classList.remove('oculto-animacion');
        }, 400); 
    });

    radio.addEventListener('click', () => {
        clearInterval(intervaloCarrusel);
        iniciarCarrusel(); 
    });
});

function avanzarCarrusel() {
    let indiceSeleccionado = -1;
    const botonesArray = Array.from(botonesRadio);

    botonesArray.forEach((radio, index) => {
        if (radio.checked) {
            indiceSeleccionado = index;
        }
    });

    let siguienteIndice = indiceSeleccionado + 1;
    if (siguienteIndice >= botonesArray.length) {
        siguienteIndice = 0; 
    }
    
    botonesArray[siguienteIndice].checked = true;
    botonesArray[siguienteIndice].dispatchEvent(new Event('change'));
}

function iniciarCarrusel() {
    intervaloCarrusel = setInterval(avanzarCarrusel, TIEMPO_CARRUSEL);
}
iniciarCarrusel(); 


/*/Boton de temas :3 /*/

const btnTemas = document.getElementById('btn-temas');
const submenuTemas = document.getElementById('submenu-temas');
const botonesOpcion = document.querySelectorAll('.btn-tema-final');
const tituloPrincipal = document.getElementById('titulo-principal');

if (btnTemas && submenuTemas) {
    
    btnTemas.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        submenuTemas.classList.toggle('activo');
    });

    botonesOpcion.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            const temaElegido = evento.target.value;

            document.body.classList.remove('tema-grimm', 'tema-abismo', 'tema-infeccion','tema-palacio');
            
            if (temaElegido !== 'original') {
                document.body.classList.add(temaElegido);
            }
            
            if (tituloPrincipal && frasesPorTema[temaElegido]) {
                tituloPrincipal.textContent = frasesPorTema[temaElegido];
            }
            if(musica && musicaPorTema[temaElegido]){
                musica.src = musicaPorTema[temaElegido];
                musica.play();
            }
            
            submenuTemas.classList.remove('activo');
        });
    });

    document.addEventListener('click', (evento) => {
        if (!evento.target.closest('.menu-desplegable')) {
            submenuTemas.classList.remove('activo');
        }
    });
}

/*/Musiquita tururum/*/

const musica = document.getElementById('musica-fondo');

if (musica) {
    document.addEventListener('click', () => {
        if (musica.paused){
            musica.play();
        }
    }, {once: true});
}



const pista = document.getElementById('pista');
const btnDerecho = document.getElementById('btn-der');
const btnIzquierdo = document.getElementById('btn-izq');
const totalTarjetas = document.querySelectorAll('.tarjeta-gigante').length;

let indiceActual = 0; 

function moverCarrusel() {
    const desplazamiento = -(indiceActual * 100);

    pista.style.transform = `translateX(${desplazamiento}%)`;
}
btnDerecho.addEventListener('click', () => {
    indiceActual++;

    if (indiceActual >= totalTarjetas) {
        indiceActual = 0; 
    }
    
    moverCarrusel();
});

btnIzquierdo.addEventListener('click', () => {
    indiceActual--;
    
    if (indiceActual < 0) {
        indiceActual = totalTarjetas - 1;
    }
    
    moverCarrusel();
});


const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('play', () => {
        if (musica) {
            musica.pause(); 
        }
    });
    video.addEventListener('pause', () => {
        if (musica) {
            musica.play(); 
        }
    });
});