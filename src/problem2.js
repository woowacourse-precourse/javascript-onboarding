const trimDuplicateString = (string) => {
  const trimedString = string.replace(/([a-zA-Z])\1+/g, "");
  return trimedString;
};

function problem2(cryptogram) {
  var answer;
  answer = trimDuplicateString(cryptogram);
  return answer;
}

module.exports = problem2;
