

function verificarMaiorEMenor() {
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, insira três números válidos.");
        return;
    }

    
    var maior = num1;
    var menor = num1;

    if (num2 > maior) {
        maior = num2;
    }
    if (num3 > maior) {
        maior = num3;
    }

    if (num2 < menor) {
        menor = num2;
    }
    if (num3 < menor) {
        menor = num3;
    }

    
    document.getElementById("resultado").innerText = 
        "O maior número é: " + maior + "\n" +
        "O menor número é: " + menor;
        
}