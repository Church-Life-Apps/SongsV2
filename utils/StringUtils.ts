/**
 * Util functions for strings.
 */

/**
 * Removes special characters from the string.
 */
export function removePunctuation(s: string): string {
  return s.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
}

/**
 * Replaces occurences of 2 or more spaces with a single space.
 */
export function removeDoubleSpaces(s: string): string {
  return s.replace(/\s{2,}/g, " ");
}
