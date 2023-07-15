/* variables */
const pantalla = document.querySelector(".pantalla");
const btn = document.querySelectorAll(".btn");

btn.forEach(boton => {
    boton.addEventListener("click", () => {
    //traigo contenido textual del boton
    const btnApretado = boton.textContent; 

    if(boton.id === "c") {
        //muestra 0 si apreta la c
        pantalla.textContent = "0"; 
        //termina la funcion flecha
        return; 
    }

    if(boton.id === "borrar"){
        //si tenemos un solo digito en la pantalla, vuelve a mostrar el 0
        if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!"){
            pantalla.textContent = "0";
        } else{
        //slice borra el ultimo digito ingresado (posicion donde queremos arrancar, posicion para finalizar de reemplazar )
        //con -1 arranca desde la ultima posicion
            pantalla.textContent = pantalla.textContent.slice(0, -1); 
        }
        return;
    }

    if(boton.id === "igual"){
        //traemos el metodo eval para que resuelva las operaciones
        try {
        //eval = evalua lo que escribimos en la pantalla y lo resuelve en el texto de la pantalla
        pantalla.textContent = eval(pantalla.textContent);
        } catch { 
            //si hay un error captura y muestra en la pantalla el error
            pantalla.textContent = "ERROR!";
        }
        return;
    }
    
    if (boton.id === "raiz") {
        //se convierte la cadena de texto en un número decimal
        const numero = parseFloat(pantalla.textContent);
        //verificamos que el num sea difrerente de NaN y que no sea un numero negativo
        if (!isNaN(numero) && numero >= 0) {
          // el metodo Math.sqrt() retorna la raiz cuadrada de numero 
          pantalla.textContent = Math.sqrt(numero);
        } else {
          pantalla.textContent = "ERROR!";
        }
        return;
    }

    if (boton.id === "parentesis-apertura") {
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
          pantalla.textContent = "(";
        } else {
          pantalla.textContent += "(";
        }
        return;
    }

    if (boton.id === "parentesis-cierre") {
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
          pantalla.textContent = ")";
        } else {
          pantalla.textContent += ")";
        }
        return;
    }   

    if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!"){
        //reemplaza si tenemos el cero
        pantalla.textContent = btnApretado; 
    } else{
        //mostramos la info a la pantalla y concatenamos lo que aprete el user +=
        pantalla.textContent += btnApretado;
    }
    
    });
});
