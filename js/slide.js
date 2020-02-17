/*---------------------OBJETO CON LAS PROPIEDADES DEL SLIDE*/ 
var p={
    paginacion: document.querySelectorAll("#paginacion li"),//circulos que identifica la imagen
    item:0,
    cajaSlide: document.querySelector("#slide ul"),
    avanzar: document.querySelector("#avanzar"),
    retroceder: document.querySelector("#retroceder"),
    imgSlide: document.querySelectorAll("#slide ul li"),//selecciona la imagen
    velocidadSlide: 3000,
    formatearLoop: false
}






/*---------------------OBJETO CON LOS METODOS DEL SLIDE*/ 

var m={
    inicioSlide: function () {
        
        for(var i=0; i<p.paginacion.length;i++){

            p.paginacion[i].addEventListener("click",m.paginacionSlide)/*captura cuando se da click en al circulito que representa el numero de imagen*/
            p.imgSlide[i].style.width= 100/(p.paginacion.length) + "%" // si se agregan n cantidad de imagenes entonces no se vera afectado el dise;o
        }        

        p.avanzar.addEventListener("click",m.avanzar)
        p.retroceder.addEventListener("click",m.retroceder)

        m.intervalo();

        p.cajaSlide.style.width=(p.paginacion.length*100) + "%"// si se agregan n cantidad de imagenes entonces no se vera afectado el dise;o
        
    },


    paginacionSlide: function(item){
        p.item=item.target.parentNode.getAttribute("item")-1;/*target sirve para capturar el item, se pone -1 para que el primero sea 0 y asi al pasar de imagen se va corriendo por 100 como en la siguiente funcion*/

        m.movimientoSlide(p.item)
    },

    avanzar:function () {
        if (p.item==p.imgSlide.length-1) {
            p.item=0;
        }else{
            p.item++;
        }   
        m.movimientoSlide(p.item)
    },

    retroceder:function () {
        if (p.item==0) {
            p.item=p.imgSlide.length-1;
        }else{
            p.item--;
        }   
        m.movimientoSlide(p.item)
    },

    movimientoSlide: function (item) {
        p.formatearLoop=true;
        p.cajaSlide.style.left=item * -100 + "%";
        
        for(var i=0; i<p.paginacion.length;i++){

            p.paginacion[i].style.opacity=.5;/* pone el circulito en opacidad 0.5 */
        }
        p.paginacion[item].style.opacity=1; /* pone el circulito en el que oprimiste en opacidad 1 */

        p.cajaSlide.style.transition = "0.7s left ease-in-out"
    },

    intervalo: function () {

        setInterval(function(){

            if (p.formatearLoop==true) {
                p.formatearLoop=false;
            }else{
                m.avanzar();
            }
        },p.velocidadSlide)
        
    }
}

m.inicioSlide();