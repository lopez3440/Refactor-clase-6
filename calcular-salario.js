
/*
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector("#cantidad-familiares").addEventListener('submit',  function (){
  const $cantidadIntegrantes = document.querySelector('#integrantes-trabajadores')
  const cantidadIntegrantes = Number($cantidadIntegrantes.value)

  borrarIntegrantes();

  if( $cantidadIntegrantes.className !== "error"){
    crearIntegrantes(cantidadIntegrantes);}
  

 return false
})


document.querySelector('#calculador-salarios').addEventListener('submit', function(){

  const $salariosIntegrantes = document.querySelectorAll(' .integrante input')
  const salariosIntegrantes  = extraerNumeros($salariosIntegrantes)

  if(document.querySelector('#calculador-salarios').className !=="hay-error"){
    document.querySelector('#mayor-salario').textContent = '$' + calcularMayorNumero(salariosIntegrantes)
    document.querySelector('#menor-salario').textContent = '$' + calcularMenorNumero(salariosIntegrantes)
    document.querySelector('#salario-anual-promedio').textContent = '$' + calcularPromedio(salariosIntegrantes)
    document.querySelector('#salario-mensual-promedio').textContent = '$' + (calcularPromedio(salariosIntegrantes)/12)
  
    mostrarResultados()}

 return false
})

document.querySelector('#resetear-inputs').onclick = resetear

function calcularPromedio(numeros){
  let total = 0   ;

  for(let i = 0; i < numeros.length; i++ ){
      total += numeros[i]
  }

  let promedio = total / numeros.length

  return promedio
}

function calcularMayorNumero (numeros){
  let mayorNumero = numeros[0]

  for(let i = 0 ; i < numeros.length; i++){
      if(numeros[i]> mayorNumero){
         mayorNumero = numeros[i]
      }
  }

  return mayorNumero
}


function calcularMenorNumero (numeros){
  let menorNumero = numeros[0]

  for(let i = 0; i < numeros.length; i++){
      if(numeros[i] < menorNumero){
          menorNumero = numeros[i]
      }
  }

  return menorNumero
}

  function crearIntegrantes(numero){
      if(numero>0){
        mostrarBotonCalcular()
        mostrarBotonResetear()
      }
      else{
        resetear()}

      for(let i = 0; i < numero; i++){
          let $div = document.createElement('div')
          $div.className = "integrante"

          let $label = document.createElement('label')
          $label.textContent = 'Salario anual integrante # ' + (i + 1) + ' : $'
          let $input = document.createElement('input')
          $input.type= "number"
          $input.name ="salario-" + (i + 1)

          $div.appendChild($label)
          $div.appendChild($input)

          $integrantes = document.querySelector('#integrantes')
          $integrantes.appendChild($div)

      }
  }

function borrarIntegrantes(){
 const $integrantes = document.querySelectorAll('div .integrante');

 for(let i = 0; i <$integrantes.length; i++){
   $integrantes[i].remove();
 }

 ocultarResultados();
}

function extraerNumeros (nodeList){
  let array =[]
  
  for(let i = 0; i<nodeList.length; i++){
    if ( Number(nodeList[i].value) !== 0){
      array.push(Number(nodeList[i].value))
    }
  }
  return array
}

function mostrarBotonCalcular(){
  document.querySelector('#calcular-salarios').className =""
}

function mostrarBotonResetear(){
  document.querySelector('#resetear-inputs').className =""
}

function ocultarBotonCalcular(){
  document.querySelector('#calcular-salarios').className ="oculto"
}

function ocultarBotonResetear(){
  document.querySelector('#resetear-inputs').className ="oculto"
}

function mostrarResultados(){
  document.querySelector('#resultados').className =""
}

function ocultarResultados(){
  document.querySelector('#resultados').className = "oculto"
}

function resetear(){
  borrarIntegrantes();
  ocultarBotonCalcular();
  ocultarBotonResetear();
  ocultarResultados();
  document.querySelector("#integrantes-trabajadores").value= ""

}


