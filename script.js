function agregar(){
    lista = document.getElementById("lista");
    texto = document.getElementById("i1").value;
    if (texto === "") { // Verifica si el campo está vacío
        alert("Por favor, ingresa algún texto."); 
        return; // Si el usuario nada termino la función aca
    }
    nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;
    lista.appendChild(nuevoElemento);
}

boton = document.getElementById("b1");
boton.addEventListener("click", agregar);