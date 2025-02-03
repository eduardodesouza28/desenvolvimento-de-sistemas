let num = 3;
let num2 = 5

function parOuImpar(int) {
    if (num % 2 == 0) {
        console.log(int + " é par" + "\n")
    } else {
        console.log(int + " é impar" + "\n")
    }
}

function numeroMaoir(n1, n2) {
    if (n1 > n2) {
        console.log(n1 + " é maior que " + n2 + "\n");
    } else {
        console.log(n2 + " é maior que " + n1 + "\n");
    }
}


numeroMaoir(num,num2)
parOuImpar(num)


