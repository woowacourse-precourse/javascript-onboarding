const ASCII = {
  ACode: 65,
  ZCode: 90,
  aCode: 97,
  zCode: 122,
};
Object.freeze(ASCII);

const isCapital = (alphabetToASCII) =>
  ASCII.ACode <= alphabetToASCII && alphabetToASCII <= ASCII.ZCode;
const isLowerCase = (alphabetToASCII) =>
  ASCII.aCode <= alphabetToASCII && alphabetToASCII <= ASCII.zCode;

const convertLetter = (alphabet) => {
  const alphabetToASCII = alphabet.charCodeAt();
  if (isCapital(alphabetToASCII))
    return String.fromCharCode(ASCII.ZCode - (alphabetToASCII - ASCII.ACode));
  if (isLowerCase(alphabetToASCII))
    return String.fromCharCode(ASCII.zCode - (alphabetToASCII - ASCII.aCode));
  return alphabet;
};

function problem4(word) {
  const answer = word
    .split("")
    .map((alphabet) => convertLetter(alphabet))
    .join("");

  return answer;
}

module.exports = problem4;
