function problem4(word) {
  var answer;
  return answer;
}

const isAlphabet = (char) => {
  const regex = /^[a-z|A-Z]+$/;
  if (regex.test(char)) return true;
  return false;
};

module.exports = problem4;
