function Soma() {
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")

    const peso = Number(valor1.value)
    const altura = Number(valor2.value)

    const Soma = peso / altura
    const multi = altura * altura
    const total = imc

    if (total<= 16, 9) {
        let peso = "muito abaixo do peso"
    }
    else if (total >= 17 && total <= 18,4) {
        let peso = "Abaixo do peso"
    }
    else if (total >=18,5 && total <= 24,9 ) {
        let peso = "Peso normal"
    }
    else if (total >= 25 && total <=29,9) {
        let peso = "Acima do peso"
    }
    else if (total >= 30 && total <= 34,9) {
        let peso = "Obesidade grau I"
    }
    else if (total >= 35 && total <= 40){
          let peso = "Obesidade grau II"
    } 
    else if(total > 40) {
         let peso = "Obesidade grau III"
    }
    

}
