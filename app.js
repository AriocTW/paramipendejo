function moverPosicionRandom(elm) {
    elm.style.position = 'absolute'; //Se pone absolute para que pueda moverse por todos lados sin tener un bloqueo
    
    //Con esta linea hago que se calcule la medida total de la altura de la pantalla del navegador
    //para que pueda moverse por todo el espacio.
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; //Offset --> sive para que el elemento no se salga de la pantalla
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';

}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e){
    moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirias que SI. Tengamos nuestra fiesta onichan, TE AMOOOO!!! 😍')
    
    divModoSexo.style.display = 'block';
    /*3 tipos de display:
    1- block -> Hace aparecer el elemento
    2- hidden -> Solo lo esconde
    3- none -> desaparece el elemento
    */

    const cancion = new Audio('images\\y2mate.com - Sonido de OniChan wtf.mp3');
    cancion.play();
    const cancion2 = new Audio('images\\y2mate.com - Omae Wa Mou.mp3');
    cancion2.play();
});


