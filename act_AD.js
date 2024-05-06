let INDEX_PREGUNTA = 0;
let puntaje = 0;
cargarPregunta(INDEX_PREGUNTA);


function cargarPregunta(index){
    objetoPregunta = basePreguntas[index];
    opciones= [...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);
    
    for(let i = 0; i< Array.length; i++){
        opciones.sort(()=>Math.random()- 0.5);
    }
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    if (objetoPregunta.imagen) {
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = ""    
    }else{
        document.getElementById("imagen").style.display = "none"  
    }
    if (objetoPregunta.ayuda) {
        document.getElementById("ayuda").style.display = "";
      } else {
        document.getElementById("ayuda").style.display = "none";
      }
      if (opciones[0] === "") {
        document.getElementById("opcion-1").style.display = "none";
    } else {
        
        document.getElementById("opcion-1").innerHTML= opciones[0];
        document.getElementById("opcion-1").style.display = "";
    }
    if (opciones[1]=== "") {
        document.getElementById("opcion-2").style.display = "none";
    } else {
        
        document.getElementById("opcion-2").innerHTML= opciones[1];
        document.getElementById("opcion-2").style.display = "";
    }
    if (opciones[2]=== "") {
        document.getElementById("opcion-3").style.display = "none";
    } else {
        
        document.getElementById("opcion-3").innerHTML= opciones[2];
        document.getElementById("opcion-3").style.display = "";
    }
    if (opciones[3] === "") {
        document.getElementById("opcion-4").style.display = "none";
    } else {
        
        document.getElementById("opcion-4").innerHTML= opciones[3];
        document.getElementById("opcion-4").style.display = "";
    }
      

    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
    

    }
    
    

async function seleccionarOpcion(index){
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta)  {
        await Swal.fire({
            title: "Respuesta correcta",
            icon: "success",
        });
        puntaje++;
    }else{
        await Swal.fire({
            title: "Respuesta incorrecta",
            html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
            icon: "error",
        });
    }
    //Acaba el juego
    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA >= basePreguntas.length) { 
        INDEX_PREGUNTA = 0;
        
        await Swal.fire({
            title: "Actividad completada",
            html: `Tu puntaje es de: ${puntaje}/${basePreguntas.length}`,
        });
        puntajebd = puntaje/basePreguntas.length;
        //sessionStorage.setItem('puntaje', puntajebd.toString());
        sessionStorage.setItem('puntaje', parseFloat(puntajebd));
        window.location.href= 'index.html';
        sessionStorage.removeItem('puntaje');
        

    } 
    //Carga la siguiente pregunta
    cargarPregunta(INDEX_PREGUNTA);
    
    
}

function ayuda(){
    Swal.fire({
        iconn: 'info',
        title: 'Ayuda',
        text: objetoPregunta.ayuda,
        
    });
}