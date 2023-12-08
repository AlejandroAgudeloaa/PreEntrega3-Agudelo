function calcularIMC(){
    document.getElementById("resultadoIMC").innerHTML="";
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let pesoIdeal = peso/(altura*altura);
    document.getElementById("resultadoIMC").innerHTML=document.getElementById("resultadoIMC").innerHTML+
                    `<div class="col bg-body-tertiary">
                        <h3>Tu IMC es</h3><p>${pesoIdeal.toFixed(2)} kg</p>
                    </div`;
}

