/**
 * resultado aproximado de uma circunferência de diâmetro igual a 20.000
 *
 * @type {number}
 */
export const PI = Math.PI // 3.141592653589793 - está sendo exportado

/**
 * recebe por parâmetro uma quantidade indefinida de números e efetua a soma dos
 * mesmos.
 *
 * @param {number[]} params
 * @returns {number} valor soma dos parâmetros
 */
export function soma (...params) { // está sendo exportado
 return params.reduce((a, b) => a + b, 0)
}