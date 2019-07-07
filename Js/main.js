(function(){

// Variables

    var lista = document.getElementById("lista"),
        tareaInput =document.getElementById("tareaInput"),
        btnNuevaTarea= document.getElementById("btn-agregar");

//   Funciones
    var agregarTarea= function(){
        var tarea = tareaInput.value,
        nuevaTarea= document.createElement("li"),
        enlace = document.createElement("a"),
        contenido = document.createTextNode(tarea);
        
        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Falta agregar una tarea");
            tareaInput.className = "error";
            return false;
            
        }


// Agregamos contenido al enlace
             enlace.appendChild(contenido);
// Agregamos atributo href
             enlace.setAttribute("href", "#") 
// Agregamos el enlace a la nueva tarea (lista) 
             nuevaTarea.appendChild(enlace);
// Agregamos la nueva tarea a la lista 
             lista.appendChild(nuevaTarea);
// Limpiamos el input
            tareaInput.value="";

    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
            
      }

    };

    var comprobarInput = function () {
        tareaInput.className="";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
        // alert("Comprobar tarea")

    };

    var eliminarTarea = function () {
        this.parentNode.removeChild(this);
        // alert("La tarea se elimino ")

       };



//   Eventos


// agregarTarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

// Comprobar input
    tareaInput.addEventListener("click", comprobarInput);


// Borrando elementos de la lista
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
        
    }


}());