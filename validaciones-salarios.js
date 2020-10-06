const $formFamiliares = document.querySelector("#cantidad-familiares")
const $formSalarios = document.querySelector("#calculador-salarios")


 function validarFormFamiliares(event){
    event.preventDefault()
    console.log("hola")
    const $trabajadores = Number(document.querySelector("#integrantes-trabajadores").value)
    const errorTrabajadores = validarIntegrantesTrabajadores($trabajadores)
    
    
    
    if(errorTrabajadores !== ""){
        document.querySelector("#integrantes-trabajadores").className ="error"
        
        const errores = document.querySelector("#errores")

        const error = document.createElement('li')
        error.textContent = errorTrabajadores

        errores.appendChild(error);}

}


 function validarFormSalarios(event){
    event.preventDefault();
    
    const $salarios = document.querySelectorAll('.integrante input')
    const salarios = convertirSalariosAArray($salarios)

    const errorSalarios = validarSalarios(salarios)

    mostrarErrorSalario(errorSalarios);



}



function validarIntegrantesTrabajadores(trabajadores){
    if(!/^[0-9]+$/.test(trabajadores)){
        return 'El campo de integrantes familiares solo acepta numeros(sin decimales)'
    }else if(trabajadores === 0){
        return 'El campo de integrantes familiares no puede estar vacio'
    }
    else{
        return ""
    }
}

function validarSalarios(salarios){
    let errorSalario = [];
     salarios.forEach(function(salario){
        if (!/^[0-9]+$/.test(salario)){
            errorSalario.push('El salario solo acepta numeros (decimales no)') 
        }else if(salario === 0){
            errorSalario.push('El salario no puede estar vacio') }
        else { errorSalario.push("")}
    })
    
    return errorSalario
}


function convertirSalariosAArray(salarios){
    let salariosArray = []

    for(i = 0; i < salarios.length; i++){
        salariosArray.push(Number(salarios[i].value))
    }

    return salariosArray
}

function mostrarErrorSalario(erroresSalarios){
    const $formSalarios = document.querySelector("#calculador-salarios")
    
    for(i=0; i < erroresSalarios.length; i++){
        if(erroresSalarios[i] !== ""){
            $formSalarios[`salario-${i+1}`].className ="error"

            const errores = document.querySelector("#errores-salarios")
            const error = document.createElement("li")
            error.innerText = erroresSalarios[i]

            errores.appendChild(error)

            $formSalarios.className ="hay-error"
        }
    }
    
}

$formFamiliares.addEventListener('submit',validarFormFamiliares);
$formSalarios.addEventListener('submit',validarFormSalarios);
