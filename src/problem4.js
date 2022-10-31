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

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
