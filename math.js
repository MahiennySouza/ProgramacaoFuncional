function somaDobroNumerosParesFuncional(numeros) {
    return numeros
        .filter(n => n % 2 === 0)   
        .map(n => n * 2)            
        .reduce((acum, n) => acum + n, 0); 
}

function somaDobroNumerosParesProcedural(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i] * 2;
        }
    }
    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };