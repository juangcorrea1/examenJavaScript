let contadorEjercicio1 = 0
let contadorEjercicio2 = 0
let contadorEjercicio3 = 0
let contadorEjercicio4 = 0
let contadorEjercicio5 = 0
let contadorEjercicio6 = 0

let repetir = true

while (repetir) {
    const menu = Number(prompt("Ingrese la operacion a ejecutar:\n 1- Ordenar 3 numeros \n 2- Calcular area circunferencia \n 3- definir tipo de triangulo \n 4- encontrar numero amigo \n 5- encontrar valor de compra \n 6- calcular nota \n 7- salir"))

switch (menu) {
    case 1:
        contadorEjercicio1++
        break;
    case 2:
        contadorEjercicio2++
        break;
    case 3:
        contadorEjercicio3++
        break;
    case 4:
        contadorEjercicio4++
        break;
    case 5:
        contadorEjercicio5++
        break;
    case 6:
        contadorEjercicio6++
        break;
    case 7:
        repetir = false
        break;

    default:
        console.log("ingrese una operacion correcta");
        break;
}
}

console.log(" El ejercicio 1 se ejecuto ",contadorEjercicio1," veces."," \n El ejercicio 2 se ejecuto ",contadorEjercicio2," veces."," \n El ejercicio 3 se ejecuto ",contadorEjercicio3," veces."," \n El ejercicio 4 se ejecuto ",contadorEjercicio4," veces."," \n El ejercicio 5 se ejecuto ",contadorEjercicio5," veces."," \n El ejercicio 6 se ejecuto ",contadorEjercicio6," veces." );
