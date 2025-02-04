let num = 4
let num2 = 5
//talvez seja util depois
// let num3 = -7
// let num4 = 14
// let num5 = -3


em ordem de feitio
parOuImpar(num)//1
numeroMaoir(num, num2)//2
somaFatorial(num)//3
fatorial(num)//4
contarNumeros()//5
operacoes(num, num2)//6
numerosPrimo(num)//7
tabuada(num)//8

function parOuImpar(n) {
    if (num % 2 == 0) {
        console.log(n + " é par" + "\n")
    } else {
        console.log(n + " é impar" + "\n")
    }
}

function numeroMaoir(n1, n2) {
    if (n1 > n2) {
        console.log(n1 + " é maior que " + n2 + "\n");
    } else {
        console.log(n2 + " é maior que " + n1 + "\n");
    }
}

function somaFatorial(n) {
    let soma = 0;
    for (i = 0; i <= n; i++) {
        soma += i
    }
    console.log(soma + "\n")
}

function fatorial(n) {
    let soma = 1;
    for (i = 1; i <= n; i++) {
        soma *= i
    }
    console.log(soma + "\n")
}

function contarNumeros() {
    let pos = 0
    let neg = 0
    numeros = [2, 5, -5, 3, -7]
    for (i = 0; i < 5; i++) {
        if (numeros[i] < 0) {
            neg++
        } else {
            pos++
        }
    }
    console.log(pos + " numeros positivos \r" + neg + " numeros negativos\n")
}

function operacoes(n1, n2) {
    multiplica(n1, n2)
    soma(n1, n2)
    subtrai(n1, n2)
    divide(n1, n2)
}

function multiplica(n1, n2) {
    console.log(n1 * n2)
}
function soma(n1, n2) {
    console.log(n1 + n2)
}
function subtrai(n1, n2) {
    console.log(n1 - n2)
}
function divide(n1, n2) {
    console.log(n1 / n2 + "\n")
}

function numerosPrimo(n){
    ndivisoes = 0
    primo = true
    for (i = 1; i <= n ;i++){
            if (n%i == 0){
                ndivisoes++
                if (ndivisoes == 2){
                primo = true
                }
            } else {
                primo = false
            }
        }
    if (primo == true){
        console.log(n + " é primo")
    } else {
        console.log(n + " não é primo")
    }
}

function tabuada(n){
    for(i = 1; i <= 10; i++){
        console.log(n * i)
    }

}


