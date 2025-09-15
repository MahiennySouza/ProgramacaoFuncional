import * as math from './math.js';

const numeros = [10, 2, 4, 9, 4, 7, 3];  
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))