// recorriendo los números del 1 al 1000.
for (let i = 1; i <= 1000; i++) {
    // % para ver si el número es divisible por 3 y/o por 5 imprimiendo Fizz o Buzz o "FizzBuzz" según corresponda
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } 
    // o el número en caso contrario de uqe ninguna de las anteriores se cumpla
    else {
        console.log(i);
    }
}
