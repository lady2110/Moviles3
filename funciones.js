document.addEventListener('DOMContentLoaded', () => {
    const imagenes = [
        { img: '/imagenes/caballo.png', name: 'caballo' },
        { img: '/imagenes/bien.png', name: 'bien' },
        { img: '/imagenes/cerdo.png', name: 'cerdo' },
        { img: '/imagenes/elefante.png', name: 'elefante' },
        { img: '/imagenes/interroga.png', name: 'interrogante' },
        { img: '/imagenes/leon.png', name: 'leon' },
        { img: '/imagenes/mono.png', name: 'mono' },
        { img: '/imagenes/oso.png.crdownload', name: 'oso' },
        { img: '/imagenes/tigre.png', name: 'tigre' },
        { img: '/imagenes/cebra.png', name: 'cebra' },
        { img: '/imagenes/loro.png', name: 'loro' },
        { img: '/imagenes/perro.png', name: 'perro' },
    ]

    //tablero html
    let tablero = document.querySelector('.tablero');
    //Arreglo para guardar el nombre de las imagenes
    let imgElegida = [];
    //Arreglo para guardar el id ID 
    let imgElegidaID = [];

    //funcion para colocar las imagenes en el html

    const crearTablero = () => {
        for(let k=0; k < imagenes.length; k++ ){
            
            let img = document.createElement('img')
            img.setAttribute('data-id', k);
            img.setAttribute('src', '/imagenes/interroga.png');
            img.setAttribute('width', '200px');
            tablero.appendChild(img);
            img.addEventListener("click",descubrirImagen);         
        }

    }

    //funcion para descurbrir una imagen del juego
    function descubrirImagen(){
        let img = this.getAttribute("data-id");
        imgElegida.push(imagenes[img].name);
    alert(imagenes[img].name);
    }

    crearTablero();


})

 