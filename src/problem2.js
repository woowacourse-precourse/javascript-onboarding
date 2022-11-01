function eliminateDuplication(str) {
  const regex = /([a-z])\1+/g;

  return str.replace(regex, "");
}

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
