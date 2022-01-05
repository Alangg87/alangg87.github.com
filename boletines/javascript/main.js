//obtener los elementos d e la clase  .close
//recorrerlos
//agregar un evento click a cada uno de ellos


let links = document.querySelectorAll(".close");

links.forEach(function(link){ 

    link.addEventListener("click",function(ev){
        ev.preventDefault();

        let content = document.querySelector('.content');

        //quitar las clases de animacion que ya tiene
        content.classList.remove("animate__pulse");
        content.classList.remove("animate__animated");

        //agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";

        },600);
       // setInterval(() => {
            
        //}, interval);
                 

    });

});

