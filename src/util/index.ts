/**
 * Compares two arrays of strings to determine if they are equal. Equality is based on
 * the same elements in the same order in both arrays.
 *
 * @function arraysEqual
 * @param {string[]} a - The first array of strings to compare.
 * @param {string[]} b - The second array of strings to compare.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */

export function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
