/**
 * Util functions for strings.
 */

const PUNCTUATION_REGEX = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
const DOUBLE_SPACES_REGEX = /\s{2,}/g;

/**
 * Removes special characters from the string.
 */
export function removePunctuation(s: string): string {
  return s.replace(PUNCTUATION_REGEX, "");
}

/**
 * Replaces occurences of 2 or more spaces with a single space.
 */
export function removeDoubleSpaces(s: string): string {
  return s.replace(DOUBLE_SPACES_REGEX, " ");
}

/**
 * Removes content within square brackets of a string.
 * (chatgpt code)
 */
export function removeSquareBrackets(str: string): string {
  let output = "";
  let count = 0;

  for (const char of str) {
    if (char === "[") count++;
    else if (char === "]" && count) count--;
    else if (!count) output += char;
  }

  return output;
}
