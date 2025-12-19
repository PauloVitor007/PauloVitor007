/**
 * @param {number} min - O valor mínimo
 * @param {number} max - O valor máximo
 * @returns {number} Um número inteiro aleatório entre min e max.
 */

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}