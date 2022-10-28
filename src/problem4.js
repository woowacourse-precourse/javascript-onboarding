function problem4(word) {

}

module.exports = problem4;

const makeUpperAlphabet = () => {
  return new Array(26)
    .fill(null)
    .map((_, i) => i + 65)
    .map((x) => String.fromCharCode(x));
}
