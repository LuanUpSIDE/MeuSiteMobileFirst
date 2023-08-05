const limparFormulario = () => {
    document.getElementById("Peso").value = ""
    document.getElementById("Altura").value = ""
  }


function calculo(){
    let altura = parseFloat(document.getElementById("Altura").value)
    let peso = parseFloat(document.getElementById("Peso").value)
    let imc = parseInt(peso / Math.pow(altura,2))

    if(imc < 18.5){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Abaixo do Peso.`)
      console.log(`Seu IMC é: ${imc}, Abaixo do Peso.`)
    }else if(imc >= 18.6 && imc <= 24.9){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Peso ideal.`)
      console.log(`Seu IMC é: ${imc}, Peso ideal.`)
    }else if(imc >= 25 && imc <= 29.9){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Acima do Peso.`)
      console.log(`Seu IMC é: ${imc}, Acima do Peso.`)
    }else if(imc >= 30.0 && imc <= 34.9){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Obesidade Grau I.`)
      console.log(`Seu IMC é: ${imc}, Obesidade Grau I.`)
    }else if(imc >= 35 && imc <= 39.9){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Obesidade Grau II.`)
      console.log(`Seu IMC é: ${imc},Obesidade Grau II.`)
    }else if(imc > 40){
        document
        .getElementById("Resultado")
        .setAttribute("value", `Seu IMC é: ${imc}, Obesidade Grau III.`)
      console.log(`Seu IMC é: ${imc}, Obesidade Grau III.`)
    }else{
        console.log("Operação Invalida")
        alert("Operação Invalida")
        limparFormulario();
    }


}

var botaoenviar = document.getElementById("enviar")
enviar.addEventListener("click", calculo)

//Codigo do StackOverFlow
function mascara(i) {
  var v = i.value

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1)
    return
  }
  if (v.length == 1) i.value += "." // Após o primeiro numero digitado coloca um "."
}
function mascara2(i) {
  var v = i.value

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1)
    return
  }
}