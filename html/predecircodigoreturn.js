function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
//*console.log imprime ("hello");
//*console.log imprime ("dojo");*/

/// problema 2

//* funcion */
function hello() {
    console.log('hello');
    // imprimimos hello

    return 15;
    // retornamos 15


}
//declaramos una variable result
// y instanciamos la funcion Hello(), hello() retorna el valor 15
var result = hello();
// result = 15

console.log('result is', result);
//imprimimos el result is 15.




function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
//la funcionnumplus:me muestra el parametro que es "3" luego ese valor le suma 15, el cual el resultado es 18
// En la variable result asigno/guardo la funcion numPlus(3)
//luego con console.log llamo a la variable resultado la cual me muestra la funcion numPlus(3).


/// problema 4

var num = 15;
console.log(num);
function logAndReturn(num2)
   console.log(num2);   
   return num2;
   



var result = logAndReturn(10);

console.log(result);
console.log(num);
// la funcion logAndReturn me va mostrar dos veces el parametro o argumento.


/// problema 5

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
//console.log imprimira [15]
//console.log imprimira[10]
//console.log imprima[20]
//console.log imprimira [15]

/*
variable        values
num                15
result             10
*/

/// problema 6

function timesTwoAgain(num) {
    console.log('num is', num);
    //imprime el numero ingresado
    var y = num*2;
    //creamos una variable llama ¨y¨ y guarda la multiplicacion
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
//Declaramos una variable llamada ¨result¨
//Dentro de la variable, guardamos y sumamos los resultados de las funciones 

console.log('result is', result);
//Imprime resultado, que este caso es 16


// problema 7

function sumNums(num1, num2) {  
    return num1+num2;
 }
 //Esta funcionme suma los parametros / argumentos.
 //luego esta suma a muestra con el retun.

 console.log(sumNums(2,3))
 //muestro la funcion y sumo 2 + 3 y muestra 5
 console.log(sumNums(3,5))
 // muestro la funcion 3 + 5 y muestra 8.


 // problema 8

 function printSumNums(num1, num2) {
    //esta funcion funcion me suma los argumentos
    console.log(num1); 
    //console.log imprime (num1)  
   return num1+num2;
   //muestra la suma de la funcion
}
console.log(printSumNums(2,3))
//muestra la funcion y suma 2 + 3 y muestra 5
console.log(printSumNums(3,5))
//muestra la funcion 3 + 5 y muestra 8


//problema 9

function sumNums(num1, num2) {//declaramos la funcion sunNum y asignamos dos parametros
    var sum = num1 + num2; //declaramos la variable sum que es igual a num1 + num2
    console.log('sum is', sum); // imprime la variable sun
    return sum; // retorn sum
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result); //13


// Desafio- numero 10
function sumNums(num1, num2) { // declaramos la funcion sunNum y asignamos dos parametros
    var sum = num1 + num2; //declaramos la variable sum que es igual a num1 + num2
    console.log('sum is', sum); // imprime la variable sun
    return sum;// retorna sum
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result); //22
 
