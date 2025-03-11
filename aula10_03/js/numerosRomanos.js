let userNumber = ""
let nule = 0

function conversor() {
    let num, ant = 0, atual = ""
    let result = 0
    userNumber = document.getElementById("romanos").value.toUpperCase()
    if (!verifyThreeLettersEquality(userNumber) && nule == 0) {
        for (i = 0; i < userNumber.length; i++) {
            atual = userNumber.charAt(i)
            switch (atual) {
                case "I":
                    num = 1
                    break
                case "V":
                    num = 5
                    break
                case "X":
                    num = 10
                    break
                case "L":
                    num = 50
                    break
                case "C":
                    num = 100
                    break
                case "D":
                    num = 500
                    break
                case "M":
                    num = 1000
                    break
                default:
                    nule = 1
                    i = userNumber.length
            }
            if (i > 0) {
                if (userNumber[i - 2] == userNumber[i - 1] && num > ant)
                    nule = 1
            }
            if (num == ant && (ant == 5 || ant == 50 || ant == 500))
                nule = 1
            if (num > ant) {
                if (ant != 5 && ant != 50 && ant != 500 && nule == 0) {
                    result += num - (ant * 2)
                } else {
                    nule = 1
                }
            } else if (nule == 0) {
                result += num
            }
            ant = num
        }
        if (nule == 0) {
            document.getElementById("decimais").innerHTML = "resultado: " + result
        } else {
            setErro()
        }
    } else {
        setErro()
    }
}
function verifyThreeLettersEquality(romaneNum){
    let regularExpression = /([A-Z])\1{3}/
    let result = regularExpression.test(romaneNum)
    return result
}
function setErro(){
    document.getElementById("decimais").innerHTML = "resultado: --"
    alert("algarismo inválido: " + userNumber)
    document.getElementById("romanos").value = ""
    nule = 0 
}