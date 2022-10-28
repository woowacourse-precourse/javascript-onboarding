function problem4(word) {

}

module.exports = problem4;

const makeUpperAlphabet = () => {
  return new Array(26)
    .fill(null)
    .map((_, i) => i + 65)
    .map((x) => String.fromCharCode(x));
}

const makeLowerAlphabet = () => {
  return new Array(26)
    .fill(null)
    .map((_, i) => i + 97)
    .map((x) => String.fromCharCode(x));
}

const isUpperString = s => {
  const target = s.charCodeAt();
  const A = 'A'.charCodeAt();
  const Z = 'Z'.charCodeAt();

  if (A <= target && target <= Z) return true;
  return false;
}

const isLowerString = s => {
  const target = s.charCodeAt();
  const a = 'a'.charCodeAt();
  const z = 'z'.charCodeAt();
  
  if (a <= target && target <= z) return true;
  return false;
}
