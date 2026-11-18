let input = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

function agregarNumeros(){
    let numero = parseFloat(input.value);

    if (isNaN(numero)) {
        alert("por favor, ingrese un numero válido.");
        input.style.backgroundColor = "#2bc9ae";
        input.focus();
        return; 
    }

    input.style.backgroundColor = "#fff"; 
    listaNumeros.push(numero);
    input.value = "";
    input.focus();
    mostrarResultado(); 
}

function mostrarResultados(){
    lista.innerHTML = "";
    let total = 0; 
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i <listaNumeros.length; i++){
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total +=listaNumeros[i];

        if (listaNumeros[i] > numMayor){
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < nunMenor){
            nunMenor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length
    suma.textContent = `Suma: ${total}`;
    
}
