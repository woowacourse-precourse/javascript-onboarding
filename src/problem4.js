/**
 * 1. split word into array of characters
 * 2. map each character to converted character
 * 3. join array of characters to word
 * @param {string} word 
 * @returns 
 */

function problem4(word) {
  const splitted = [...word];
  return splitted.map(frogConvert).join('');
}

const frogConvert = (x) => {
  if (x >= 'a' && x <= 'z') return convertChar(x, true);
  else if (x >= 'A' && x <= 'Z') return convertChar(x, false);
  else return x;
};

const convertChar = (target, isLowerCase) => {
  const INTERVAL = 25;
  const base = isLowerCase ? 'a' : 'A';
  const offset = target.charCodeAt(0) - base.charCodeAt(0);

  return String.fromCharCode(base.charCodeAt(0) + (INTERVAL - offset));
};

module.exports = problem4;
