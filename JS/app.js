function calcularIMC(){
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let pesoIdeal = peso/(altura*altura).toFixed(2);
    document.getElementById("resultadoIMC").innerHTML=document.getElementById("resultadoIMC").innerHTML+
                    `<div class="col bg-body-tertiary">
                        <h3>Tu IMC es</h3><p>${pesoIdeal} kg</p>
                    </div`;
}