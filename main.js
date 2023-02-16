// inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivoId = null;
let timerInicial = 30;
let numeroTarjetas = 0;
let sorteoNumeros = null;

// llamando id desde el HTML
let mosntrarMovimientos = document.getElementById('movimientos');
let mostarAciertos = document.getElementById('aciertos');
let mostarTiempo = document.getElementById('t-restantes');

let botontajetas16 = document.getElementById('btn-tarjetas16');
let botontajetas32 = document.getElementById('btn-tarjetas32');


let contenedorTable = document.getElementById('contenedorTable');

let section1 = document.getElementById('section1');

let contenedorResultados = document.getElementById('contenedorResultados');


// creacion de array para las tarjetas
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
// creacion de array para las tarjetas mas dificil
let numeros2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16];



function bloquerTarjetas(){
    for(let i=0;i<= numeroTarjetas;i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }

}


// boton para tabla de 16 cuadros
botontajetas16.addEventListener('click',(e)=>{
    section1.style.display = 'block';
    contenedorResultados.style.display = 'block';
    e.preventDefault()
    numeroTarjetas = 16;
    sorteoNumeros = numeros;
    contenedorTable.innerHTML = `
    <table id="table" class="tabla16">
    <tr>
        <td><button id="0" onclick="destapar(0)"></button></td>
        <td><button id="1" onclick="destapar(1)"></button></td>
        <td><button id="2" onclick="destapar(2)"></button></td>
        <td><button id="3" onclick="destapar(3)"></button></td>
    </tr>
    <tr>
        <td><button id="4" onclick="destapar(4)"></button></td>
        <td><button id="5" onclick="destapar(5)"></button></td>
        <td><button id="6" onclick="destapar(6)"></button></td>
        <td><button id="7" onclick="destapar(7)"></button></td>
    </tr>
    <tr>
        <td><button id="8" onclick="destapar(8)"></button></td>
        <td><button id="9" onclick="destapar(9)"></button></td>
        <td><button id="10" onclick="destapar(10)"></button></td>
        <td><button id="11" onclick="destapar(11)"></button></td>
    </tr>
    <tr>
        <td><button id="12" onclick="destapar(12)"></button></td>
        <td><button id="13" onclick="destapar(13)"></button></td>
        <td><button id="14" onclick="destapar(14)"></button></td>
        <td><button id="15" onclick="destapar(15)"></button></td>
    </tr>
    </table>
    `;
    botontajetas32.disabled = true;
    
    // desordenar el array de numeros
    numeros = numeros.sort(()=>{return Math.random()-0.5})
    function contarTiempo(){
        let tiempoRegresivoId = setInterval(()=>{
            timer --;
            mostarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
            if(timer==0){
                clearInterval(tiempoRegresivoId);
                bloquerTarjetas();
            }
        },1000)
    }
    contarTiempo();
})


// boton para la tabla de 32 cuadros
botontajetas32.addEventListener('click',(e)=>{
    e.preventDefault()
    section1.style.display = 'block';
    contenedorResultados.style.display = 'block';
    let tiempo = 120;
    numeroTarjetas = 32;
    sorteoNumeros = numeros2;
    contenedorTable.innerHTML = `
    <table id="table" class="table32">
    <tr>
      <td><button id="0" onclick="destapar(0)"></button></td>
      <td><button id="1" onclick="destapar(1)"></button></td>
      <td><button id="2" onclick="destapar(2)"></button></td>
      <td><button id="3" onclick="destapar(3)"></button></td>
      <td><button id="4" onclick="destapar(4)"></button></td>
      <td><button id="5" onclick="destapar(5)"></button></td>
      <td><button id="6" onclick="destapar(6)"></button></td>
      <td><button id="7" onclick="destapar(7)"></button></td>
    </tr>
    <tr>
      <td><button id="8" onclick="destapar(8)"></button></td>
      <td><button id="9" onclick="destapar(9)"></button></td>
      <td><button id="10" onclick="destapar(10)"></button></td>
      <td><button id="11" onclick="destapar(11)"></button></td>
      <td><button id="12" onclick="destapar(12)"></button></td>
      <td><button id="13" onclick="destapar(13)"></button></td>
      <td><button id="14" onclick="destapar(14)"></button></td>
      <td><button id="15" onclick="destapar(15)"></button></td>
    </tr>
    <tr>
      <td><button id="16" onclick="destapar(16)"></button></td>
      <td><button id="17" onclick="destapar(17)"></button></td>
      <td><button id="18" onclick="destapar(18)"></button></td>
      <td><button id="19" onclick="destapar(19)"></button></td>
      <td><button id="20" onclick="destapar(20)"></button></td>
      <td><button id="21" onclick="destapar(21)"></button></td>
      <td><button id="22" onclick="destapar(22)"></button></td>
      <td><button id="23" onclick="destapar(23)"></button></td>
    </tr>
    <tr>
      <td><button id="24" onclick="destapar(24)"></button></td>
      <td><button id="25" onclick="destapar(25)"></button></td>
      <td><button id="26" onclick="destapar(26)"></button></td>
      <td><button id="27" onclick="destapar(27)"></button></td>
      <td><button id="28" onclick="destapar(28)"></button></td>
      <td><button id="29" onclick="destapar(29)"></button></td>
      <td><button id="30" onclick="destapar(30)"></button></td>
      <td><button id="31" onclick="destapar(31)"></button></td>
    </tr>
  </table>
    `;



    botontajetas16.disabled = true;

    // desordenar el array de numeros 2
    numeros2 = numeros2.sort(()=>{return Math.random()-0.5})

    if(aciertos == 16){
        clearInterval(tiempoRegresivoId);

    }
    function contarTiempo(){
        let tiempoRegresivoId = setInterval(()=>{
            tiempo --;
            mostarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`;
            if(tiempo==0){
                clearInterval(tiempoRegresivoId);
                bloquerTarjetas();
            }
        },1000)
    }
    contarTiempo()
})



//funcion principal
function destapar(id){
    tarjetasDestapadas ++;

    if(temporizador == false){
        temporizador = true;
    }

    if(tarjetasDestapadas==1){
        // mostrar el primer numero
        tarjeta1 = document.getElementById(id)
        primerResultado = sorteoNumeros[id];
        tarjeta1.innerHTML = primerResultado;


        // desabilitar el primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas==2){
        // mostrar el segundo numero
        tarjeta2 = document.getElementById(id)
        segundoResultado = sorteoNumeros[id];
        tarjeta2.innerHTML = segundoResultado;

        // desabilitar el segundo boton
        tarjeta2.disabled = true;

        // numeros de movimientos
        movimientos ++;
        mosntrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
        if(primerResultado == segundoResultado){
            // encerar el contador de tarjetas de destapas
            tarjetasDestapadas = 0;

            // Aumento de aciertos
            aciertos ++;
            mostarAciertos.innerHTML = `Aciertos: ${aciertos}`


            if(aciertos == 8){
                clearInterval(tiempoRegresivoId);
                mostarAciertos.innerHTML = `Aciertos: ${aciertos} OMGGGG`
                mostarTiempo.innerHTML = `Tiempo: ${timerInicial - timer} se termino`;
                mosntrarMovimientos.innerHTML = `Movimientos: ${movimientos} ya`

            }
        
        }else {
            // mostar momentaneamente valoes y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },500);
        }
    }
}



function reset() {
    location.reload();
  }