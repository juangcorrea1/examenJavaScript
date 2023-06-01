// Contadores 
let contadorEjercicio1 = 0
let contadorEjercicio2 = 0
let contadorEjercicio3 = 0
let contadorEjercicio4 = 0
let contadorEjercicio5 = 0
let contadorEjercicio6 = 0

let repetir = true

//funciones

//Funcion ordenar numeros
function ordenarTresNumeros() {
    let num1 = Number(prompt("Ingrese el primer numero"))
    let num2 = Number(prompt("Ingrese el segundo numero"))
    let num3 = Number(prompt("Ingrese el tercer numero"))

    let menorAMayor = []
    if (num1 <= num2 && num2 <= num3) {
        menorAMayor = [num1, num2, num3];
      } else if (num1 <= num3 && num3 <= num2) {
        menorAMayor = [num1, num3, num2];
      } else if(num2 <= num1 && num1 <= num3){
        menorAMayor = [num2, num1, num3];
      } else if(num2 <= num3 && num3 <= num1){
        menorAMayor = [num2, num3, num1];
      }else if(num3 <= num1 && num1 <= num2) {
        menorAMayor = [num3, num1, num2];
      }else {
        menorAMayor = [num3, num2, num1];
      }
    let mayorAMenor
    if (num1 >= num2 && num2 >= num3) {
        mayorAMenor = [num1, num2, num3];
      } else if (num1 >= num3 && num3 >= num2) {
        mayorAMenor = [num1, num3, num2];
      } else if(num2 >= num1 && num1 >= num3){
        mayorAMenor = [num2, num1, num3];
      } else if(num2 >= num3 && num3 >= num1){
        mayorAMenor = [num2, num3, num1];
      }else if(num3 >= num1 && num1 >= num2) {
        mayorAMenor = [num3, num1, num2];
      }else {
        mayorAMenor = [num3, num2, num1];
      }
    console.log("orden de menor a mayor", menorAMayor);
    console.log("orden de mayor a menor", mayorAMenor);
}

//Area circunferencia

function areaCircunferencia() {
    let radio = Number(prompt("ingrese el radio de la circunferencia"))
    let area = Math.PI * (radio*radio)
    console.log("el area de la circunferencia con radio ",radio, "es de: ",area);
}

//Tipo de triangulo 

function tipoTriangulo() {
    let lado1 = Number(prompt("Ingrese el primer lado"))
    let lado2 = Number(prompt("Ingrese el segundo lado"))
    let lado3 = Number(prompt("Ingrese el tercer lado"))
    if (lado1 === lado2 && lado2=== lado3) {
        console.log("el triangulo es equilatero");
    }else if(lado1===lado2 || lado2===lado3 || lado3===lado1){
        console.log("el triangulo es isosceles");
    }else{
        console.log("el triangulo es escaleno");
    }
}

//numero amigo
function obtenerDivisores(numero) {
    let divisores = [];
    for (let i=1; i < numero; i++) {
      if (numero % i === 0) {
        divisores[divisores.length] = i;
      }
    }
    return divisores;
  }

function sumarDivisores(divisores) {
    let suma = 0;
    for (let i = 0; i < divisores.length; i++) {
        suma += divisores[i];
    }
    return suma;
}

function numeroAmigo(numero1, numero2) {
    let divisoresNumero1 = obtenerDivisores(numero1);
    let divisoresNumero2 = obtenerDivisores(numero2);

    let sumaDivisoresNumero1 = sumarDivisores(divisoresNumero1);
    let sumaDivisoresNumero2 = sumarDivisores(divisoresNumero2);
    
    if (sumaDivisoresNumero1 === numero2 && sumaDivisoresNumero2 === numero1) {
        console.log(numero1,"y",numero2,"son numeros amigos");
        } else {
        console.log(numero1,"y",numero2,"no son numeros amigos");
        }
    console.log(divisoresNumero1,divisoresNumero2,sumaDivisoresNumero1,sumaDivisoresNumero2);
}

//compras 
function compras() {
  let valor = Number(prompt("Ingrese el valor del producto"))
  let cantidad = Number(prompt("Ingrese la cantidad de productos"))

  let subTotal = valor * cantidad
  let iva = subTotal * 0.19
  let total = subTotal + iva

  if (subTotal > 500000) {
    total = subTotal
    iva = 0
    console.log("el valor del iva es",iva);
    console.log("el valor de la compra es de: ", total) 
  }
  if (subTotal > 1000000) {
    let descuento = total * 0.1;
    total = subTotal - descuento;
    console.log("el valor del iva es de",iva);
    console.log("tienes un descuento del 10%, su valor a pagar es de: ",total);
  }
  else{
    console.log("su iva es de: ",iva);
    console.log("el valor de la compra es de: ",total);
  }  
}


//Estructura del menu
while (repetir) {
    const menu = Number(prompt("Ingrese la operacion a ejecutar:\n 1- Ordenar 3 numeros \n 2- Calcular area circunferencia \n 3- definir tipo de triangulo \n 4- encontrar numero amigo \n 5- encontrar valor de compra \n 6- calcular nota \n 7- salir"))

switch (menu) {
    case 1:
        ordenarTresNumeros()
        contadorEjercicio1++
        break;
    case 2:
        areaCircunferencia()
        contadorEjercicio2++
        break;
    case 3:
        tipoTriangulo()
        contadorEjercicio3++
        break;
    case 4:
        let numero1 = Number(prompt("Ingrese el primer número:"));
        let numero2 = Number(prompt("Ingrese el segundo número:"));
        numeroAmigo(numero1, numero2)
        contadorEjercicio4++
        break;
    case 5:
        compras()
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

//Mensaje de cuantas veces se ejecuto cada ejercicio
console.log(" El ejercicio 1 se ejecuto ",contadorEjercicio1," veces."," \n El ejercicio 2 se ejecuto ",contadorEjercicio2," veces."," \n El ejercicio 3 se ejecuto ",contadorEjercicio3," veces."," \n El ejercicio 4 se ejecuto ",contadorEjercicio4," veces."," \n El ejercicio 5 se ejecuto ",contadorEjercicio5," veces."," \n El ejercicio 6 se ejecuto ",contadorEjercicio6," veces." );

//mayor y menor ejercicio ejecutado
const contador = [contadorEjercicio1, contadorEjercicio2, contadorEjercicio3, contadorEjercicio4, contadorEjercicio5, contadorEjercicio6];

const indiceMaximo = contador.indexOf(Math.max(...contador));
const ejercicioMasVeces = `Ejercicio ${indiceMaximo + 1}`;

const indiceMinimo = contador.indexOf(Math.min(...contador));
const ejercicioMenosVeces = `Ejercicio ${indiceMinimo + 1}`;

console.log("El ejercicio que mas veces se ejecuto es",ejercicioMasVeces);
console.log("El ejercicio que menos veces se ejecuto es",ejercicioMenosVeces);
