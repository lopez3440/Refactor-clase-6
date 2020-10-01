

function pruebaValidarIntegrantes(){
console.assert(
    validarIntegrantesTrabajadores(2.1) === 'El campo de integrantes familiares solo acepta numeros(sin decimales)',
    'Validar integrantes trabajadores no valido que solo acepte numeros'
)

console.assert(
    validarIntegrantesTrabajadores(0) === 'El campo de integrantes familiares no puede estar vacio',
    'Validar integrantes trabajadores no valido que no este vacio'
)

console.assert(
    validarIntegrantesTrabajadores(2) === "",
    'Validar integrantes trabjadores fallo con un input valido '
)
}



function prubeaValidarSalarios(){

const errores = validarSalarios([123.123,0,123456])

console.assert(
    errores[0] === "El salario solo acepta numeros (decimales no)",
    'Validar salarios no valido que salarios solo acepte numeros sin decimales'
)

console.assert(
    errores[1] === 'El salario no puede estar vacio',
    'Validar salarios no valido que el campo de salarios no este vacio')

    console.assert(
        errores[2] === '',
        'Validar salarios no funciono con un salario valido'
    )
    }

pruebaValidarIntegrantes();
prubeaValidarSalarios();
