document.addEventListener('DOMContentLoaded', () => {
    const imagenes = [
        { img: '/imagenes/reno.png', name: 'reno' },
        { img: '/imagenes/lufi.png', name: 'lufi' },
        { img: '/imagenes/zoro.png', name: 'zoro' },
        { img: '/imagenes/nami.png', name: 'nami' },
        { img: '/imagenes/ace.png', name: 'ace' },
        { img: '/imagenes/usop.png', name: 'usop' },
        { img: '/imagenes/reno.png', name: 'reno' },
        { img: '/imagenes/lufi.png', name: 'lufi' },
        { img: '/imagenes/zoro.png', name: 'zoro' },
        { img: '/imagenes/nami.png', name: 'nami' },
        { img: '/imagenes/ace.png', name: 'ace' },
        { img: '/imagenes/usop.png', name: 'usop' },
    ]

    //tablero html
    let tablero = document.querySelector('.tablero');
    //Arreglo para guardar el nombre de las imagenes
    let imgElegida = [];
    //Arreglo para guardar el id ID 
    let imgElegidaID = [];
    //aciertos
    let aciertos = document.querySelector(".conteo");
    let conteo = [];

    //funcion patra colocar las imagenes de pregunta en el tablero
    //funcion para colocar aleatorias las imagenes
    imagenes.sort( ()=>0.5 - Math.random);
    //funcion para colocar las imagenes en el html

    const crearTablero = () => {
        for(let k=0; k < imagenes.length; k++ ){
            
            let img = document.createElement('img')
            img.setAttribute('data-id', k);
            img.setAttribute('src', '/imagenes/interroga.jpg');
            img.setAttribute('width', '200px');
            img.setAttribute('class','a');
            tablero.appendChild(img);
            img.addEventListener("click",descubrirImagen);         
        }

    }

    //funcion para descurbrir una imagen del juego
    function descubrirImagen(){
        let imgClick = this.getAttribute("data-id");
        imgElegida.push(imagenes[imgClick].name);
        imgElegidaID.push(imgClick);
        //alert(imagenes[img].name);
        this.setAttribute("src",imagenes[imgClick].img);
        if(imgElegida.length===2){
            setTimeout(() => {
                compararimagen()
            }, 300);
        }
    }

   
    //Función para comprar imagenes
    function compararimagen(){
    let todaslasImg = document.querySelectorAll("img");
    let opcion1 = imgElegidaID[0];
    let opcion2 = imgElegidaID[1];
    if(imgElegida[0] === imgElegida[1]){
        alert("Correcto!!!");
        todaslasImg[opcion1].setAttribute("src","/imagenes/bien.png");
        todaslasImg[opcion2].setAttribute("src","/imagenes/bien.png");
        conteo.push(imgElegida);
    }else{
        alert("Sigue Intentanto!!!");
        todaslasImg[opcion1].setAttribute("src","/imagenes/interroga.jpg");
        todaslasImg[opcion2].setAttribute("src","/imagenes/interroga.jpg");
    }
    imgElegida=[];
    imgElegidaID=[];
    aciertos.textContent = conteo.length;

    if(conteo.length===6){
        aciertos.textContent = "Ganaste" 
    }
    }
    crearTablero();


})

 