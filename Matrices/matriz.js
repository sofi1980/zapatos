/**
 * Practica de JavaScript utilizando matrices 
 */
//Variables globales ++++++++++++++++++++++
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opciones = document.getElementById('opciones').value;
    switch (opciones) {
        case '1':
            mostrarMatriz();
            break;
        case '2':
            mostrarDiagonalPri();
            break;
        case '3':
            mostrarDiagonalInver();
            break;
        case '4':

            break;
        case '5':

            break;
        case '6':

            break;
        case '7':

            break;
        case '8':
            generarMatriz();
            console.log(matriz);
            break;

        default:
            break;
    }
 
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100);

        }
    }
}
/**Muestra los numeros de la matriz en la caja */
function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f'+ f +'c'+c;
            console.log(ident);
            document.getElementById(ident).innerText=matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarDiagonalPri() {
    for (let f = 0; f < matriz.length; f++) {
        let ident='d-f'+ f +'c'+ f;
        let numero = matriz[f][f];
        document.getElementById(ident).innerText=numero;
        
    }
    
}
//inversa
function mostrarDiagonalInver() {
    for (let f = 0; f < matriz.length; f++) {
        let ident='d-f'+ f +'c'+ f;
        let numero = matriz[f][4-f];
      
        document.getElementById(ident).innerText=numero;
        
    }
    
}

/**
 * Genera un numero entero aleatorio
 * entre min y max
 * @param {int} min valor minimo a generar
 * @param {int} max valor maximo a generar
 */
function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;
}


generarMatriz();